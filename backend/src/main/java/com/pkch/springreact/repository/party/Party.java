package com.pkch.springreact.repository.party;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Party {

    @Id @GeneratedValue
    private Long id;
    @Column(length = 100)
    private String name;
    @Temporal(TemporalType.TIMESTAMP)
    private Date registerDate = new Date();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }
}
