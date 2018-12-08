package com.hackathon.unist.koreantime.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.oauth2.client.CommonOAuth2Provider;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;

import java.util.List;
import java.util.Objects;

import static java.util.stream.Collectors.toList;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/", "/oauth2/**", "/login**").permitAll()
                .anyRequest().authenticated()
                    .and()
                .oauth2Login()
                    .defaultSuccessUrl("/loginSuccess")
                    .failureUrl("/loginFailed");
    }

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository(OAuth2ClientProperties properties){
        List<ClientRegistration> registrations = properties.getRegistration().keySet().stream()
                .map(c -> getRegistration(properties, c))
                .filter(Objects::nonNull)
                .collect(toList());
        return new InMemoryClientRegistrationRepository(registrations);
    }

    private ClientRegistration getRegistration(OAuth2ClientProperties properties, String client) {
        if("facebook".equals(client)){
            OAuth2ClientProperties.Registration registration = properties.getRegistration().get("facebook");
            return CommonOAuth2Provider.FACEBOOK.getBuilder(client)
                    .clientId(registration.getClientId())
                    .clientSecret(registration.getClientSecret())
                    .userInfoUri("https://graph.facebook.com/me?fields=id,name,email,link")
                    .scope("email")
                    .build();
        }
        return null;
    }
}
