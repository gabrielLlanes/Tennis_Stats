package com.example.demo.controllers;

import com.example.demo.miscTools.requestBody.Head2Head;
import com.example.demo.model.Match;
import com.example.demo.model.PlayerActivitySingleTournament;
import com.example.demo.model.PlayerStatistics;
import com.example.demo.services.TennisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api")
public class TennisRestController {
    //private final Head2Head h2h;
    private final TennisService tennisService;

    @Autowired
    public TennisRestController(
            TennisService tennisService) {this.tennisService = tennisService;}

    @GetMapping("/matches")
    public List<Match> getAllMatches() {
        return tennisService.getAllMatches();
    }

    @PostMapping("/h2hmatches")
    public List<Match> getMatchesByPlayerNames(
            @RequestBody Head2Head h2h) {

        return tennisService.getMatchesByPlayerNames(h2h.getP1(), h2h.getP2());
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
