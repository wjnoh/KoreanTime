package com.hackathon.unist.koreantime.api.participation;

import java.io.Serializable;

public class Participation_PK implements Serializable {

    private Long user;
    private Long party;

    public Participation_PK() {}

    public Participation_PK(Long user, Long party) {
        this.user = user;
        this.party = party;
    }
}
