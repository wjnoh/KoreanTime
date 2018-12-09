package com.hackathon.unist.koreantime.api.party;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/party")
public class PartyController {

    @PostMapping("/")
    public Party createParty(){

    }

    @GetMapping("/{id}")
    public Party getDetailsParty(@PathVariable Long id){

    }

    @PostMapping("/{id}/join")
    public Party joinParty(@PathVariable("id") Party party){

    }
}
