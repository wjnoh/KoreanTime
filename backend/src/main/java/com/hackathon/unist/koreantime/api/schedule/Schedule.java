package com.hackathon.unist.koreantime.api.schedule;

import com.hackathon.unist.koreantime.api.party.Party;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id")
public class Schedule {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDateTime date;
    @Enumerated(EnumType.STRING)
    private Category category;
    private boolean isAlarm;
    private LocalDateTime registerDate;
    @ManyToOne
    private Party party;

    @PrePersist
    public void initRegisterDate(){
        this.registerDate = LocalDateTime.now();
    }
}
