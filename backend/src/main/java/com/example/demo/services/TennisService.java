package com.example.demo.services;

import com.example.demo.miscTools.SingleTournamentMatchComparator;
import com.example.demo.model.Match;
import com.example.demo.model.PlayerActivitySingleTournament;
import com.example.demo.model.PlayerActivitySingleTournamentMatch;
import com.example.demo.model.PlayerStatistics;
import com.example.demo.repositories.TennisRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TennisService {
    private final TennisRepo tennisRepo;

    @Autowired
    public TennisService(TennisRepo tennisRepo) {
        this.tennisRepo = tennisRepo;
    }

    public List<Match> getAllMatches() {
        return tennisRepo.getAllMatches();
    }

    public List<Match> getMatchesByPlayerNames(String player1, String player2) {
        return tennisRepo.getMatchesByPlayerNames(player1, player2);
    }

    public PlayerStatistics getPlayerStatisticsByName(String playerName) {
        return tennisRepo.getPlayerStatisticsByName(playerName);
    }


    public ArrayList<PlayerActivitySingleTournament> getPlayerActivity(String playerName) {
        ArrayList<PlayerActivitySingleTournament> playerActivity = new ArrayList<>();
        ArrayList<Match> matches = tennisRepo.getAllMatchesByPlayer(playerName);
        ArrayList<PlayerActivitySingleTournamentMatch> currTourneyMatches = new ArrayList<>();

        matches.forEach(match -> {
            //System.out.println(match);
            boolean playerIsWinner = playerName.equals(match.getWinnerName()) ? true : false;
            String tourneyName = match.getTourneyName();
            java.sql.Date tourneyDate = match.getTourneyDate();
            String surface = match.getSurface();
            short rankingUponEntry = playerIsWinner ? match.getWinnerRank() : match.getLoserRank(); //may have null conversion to 0
            String result = match.getWinnerName().equals(playerName) ? "W" : "L";
            String opponent = result.equals("W") ? match.getLoserName() : match.getWinnerName();
            String round = match.getRound();
            String score = match.getScore();
                if(matches.indexOf(match) == 0)  {
                    currTourneyMatches.add(new PlayerActivitySingleTournamentMatch(
                            round, opponent, result, score
                    ));
                }
                else if(match.getTourneyName().equals(matches.get(matches.indexOf(match) - 1).getTourneyName())){
                    currTourneyMatches.add(new PlayerActivitySingleTournamentMatch(
                            round, opponent, result, score));
                }
                else {
                    Match prevMatch = matches.get(matches.indexOf(match) - 1);
                    playerActivity.add(new PlayerActivitySingleTournament(
                            prevMatch.getTourneyName(),
                            prevMatch.getTourneyDate(),
                            prevMatch.getSurface(),
                            prevMatch.getWinnerName().equals(playerName) ? prevMatch.getWinnerRank() : prevMatch.getLoserRank(),
                            new ArrayList<PlayerActivitySingleTournamentMatch>(currTourneyMatches)));
                    currTourneyMatches.clear();
                    currTourneyMatches.add(new PlayerActivitySingleTournamentMatch(
                            round, opponent, result, score));
                }
        });
        playerActivity.forEach(singleTournamentActivity -> {
            singleTournamentActivity.getMatches().sort(new SingleTournamentMatchComparator());
        });
        return playerActivity;
    }

    public void calculateAllStatistics() {
        long t1 = new java.util.Date().getTime();
        tennisRepo.calculateAllStatistics();
        long t2 = new java.util.Date().getTime();
        System.out.println("" + (t2-t1) + " ms");
    }

    public ArrayList<String> getAllPlayerNames() {
        return tennisRepo.getAllPlayerNames();
    }

}
