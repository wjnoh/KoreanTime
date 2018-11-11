package com.pkch.springreact.repository.schedule;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Schedule {
    @Id @GeneratedValue
    private Long id;
    @Enumerated(EnumType.STRING)
    private Category category;
    @Temporal(TemporalType.DATE)
    private Date registerDate = new Date();
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
