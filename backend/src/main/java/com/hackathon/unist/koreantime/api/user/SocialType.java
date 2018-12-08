package com.hackathon.unist.koreantime.api.user;

public enum SocialType {
    FACEBOOK("facebook");

    private final String ROLE_PREFIX = "ROLE_";
    private String name;

    SocialType(String name) {
        this.name = name;
    }

    public String getRoleType(){
        return ROLE_PREFIX + name.toUpperCase();
    }

    public String getName(){
        return name;
    }

    public boolean isEquals(String authority){
        return this.name.equals(authority);
    }

}
