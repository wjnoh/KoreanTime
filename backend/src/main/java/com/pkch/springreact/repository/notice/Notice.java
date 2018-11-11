package com.pkch.springreact.repository.notice;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Notice {

    @Id @GeneratedValue
    private Long id;
    private String title;
    @Lob
    private String content;
    @Temporal(TemporalType.TIMESTAMP)
    private Date registerDate = new Date();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(Date registerDate) {
        this.registerDate = registerDate;
    }
}
