package com.hackathon.unist.koreantime.api.participation;

import com.hackathon.unist.koreantime.api.party.Party;
import com.hackathon.unist.koreantime.api.user.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity @IdClass(Participation_PK.class)
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter @EqualsAndHashCode(of = "id")
public class Participation {

    @Id @ManyToOne @JoinColumn(name="user_id")
    private User user;
    @Id @ManyToOne @JoinColumn(name="party_id")
    private Party party;
    private LocalDateTime totalDateTime;
    private Integer lateCount = 0;
}
