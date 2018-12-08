package com.hackathon.unist.koreantime.api.user;

import com.hackathon.unist.koreantime.api.oauth.SocialUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @GetMapping("/")
    public String home(){
        return "Hello World!";
    }

    @GetMapping("/loginSuccess")
    public User loginSuccess(@SocialUser User user){
        return user;
    }

    @GetMapping("/loginFailed")
    public String loginfailed(){
        return "login failed";
    }

    @GetMapping("/test")
    public Principal test(Principal principal){
        return principal;
    }

}
