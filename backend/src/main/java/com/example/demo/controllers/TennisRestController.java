package com.example.demo.controllers;

import com.example.demo.model.Match;
import com.example.demo.model.PlayerActivitySingleTournament;
import com.example.demo.model.PlayerStatistics;
import com.example.demo.services.TennisService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api")
public class TennisRestController {

    private final TennisService tennisService;

    public TennisRestController(TennisService tennisService) {this.tennisService = tennisService;}

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return tennisService.getAllMatches();
    }

    @GetMapping("/h2hmatches")
    public List<Match> getMatchesByPlayerNames(@RequestParam("First Player Name") String player1,
                                               @RequestParam("Second Player Name") String player2) {
        return tennisService.getMatchesByPlayerNames(player1, player2);
    }

    @GetMapping("/playerstats")
    public PlayerStatistics getPlayerStatisticsByName(@RequestParam("Player Name") String playerName) {
        return tennisService.getPlayerStatisticsByName(playerName);
    }

    @GetMapping("/playeractivity")
    public List<PlayerActivitySingleTournament> getPlayerActivity(@RequestParam("Player Name") String playerName) {
        return tennisService.getPlayerActivity(playerName);
    }

    @GetMapping("/playernames")
    public List<String> getAllPlayerNames() {
        return tennisService.getAllPlayerNames();
    }

    @GetMapping("/calculateallstats")
    public String calculateAllStatistics() {
        tennisService.calculateAllStatistics();
        return "Calculated statistics and updated database.";
    }
}
