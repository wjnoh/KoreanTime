package com.hackathon.unist.koreantime.api.notice;

import com.hackathon.unist.koreantime.api.party.Party;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id")
public class Notice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Lob
    private String content;
    private LocalDateTime registerDate;
    @ManyToOne
    private Party party;
    @PrePersist
    public void initRegisterDate(){
        this.registerDate = LocalDateTime.now();
    }
}
