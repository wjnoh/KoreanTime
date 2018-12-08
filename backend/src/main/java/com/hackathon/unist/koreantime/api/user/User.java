package com.hackathon.unist.koreantime.api.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String principal;
    @Enumerated(EnumType.STRING)
    private SocialType socialType;

    @Builder
    public User(String name, String email, String principal, SocialType socialType) {
        this.name = name;
        this.email = email;
        this.principal = principal;
        this.socialType = socialType;
    }
}
