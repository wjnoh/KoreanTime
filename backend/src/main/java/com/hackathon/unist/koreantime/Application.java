package com.hackathon.unist.koreantime;

import com.hackathon.unist.koreantime.api.oauth.UserArgumentResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@SpringBootApplication
public class Application{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
