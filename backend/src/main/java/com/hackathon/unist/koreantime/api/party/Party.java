package com.hackathon.unist.koreantime.api.party;

import com.hackathon.unist.koreantime.api.notice.Notice;
import com.hackathon.unist.koreantime.api.participation.Participation;
import com.hackathon.unist.koreantime.api.schedule.Schedule;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter @EqualsAndHashCode(of = "id")
public class Party {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalTime koreanTime;
    private String authCode = UUID.randomUUID().toString().substring(0,7);
    private LocalDateTime registerDate;
    @OneToMany(mappedBy = "party")
    private List<Participation> participations = new ArrayList<>();
    @OneToMany(mappedBy = "party")
    private List<Schedule> schedules = new ArrayList<>();
    @OneToMany(mappedBy = "party")
    private List<Notice> notices = new ArrayList<>();

    @PrePersist
    public void initRegisterDate(){
        this.registerDate = LocalDateTime.now();
    }
}
