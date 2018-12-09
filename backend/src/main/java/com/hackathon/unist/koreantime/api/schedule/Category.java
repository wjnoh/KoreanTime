package com.hackathon.unist.koreantime.api.schedule;

public enum Category {
    Study("study");

    private String value;

    Category(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
