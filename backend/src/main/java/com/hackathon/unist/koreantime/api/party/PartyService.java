package com.hackathon.unist.koreantime.api.party;

import com.hackathon.unist.koreantime.api.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartyService {

    @Autowired
    private UserRepository userRepository;
}
