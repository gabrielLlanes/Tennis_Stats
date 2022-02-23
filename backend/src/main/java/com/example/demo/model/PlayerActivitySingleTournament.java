package com.example.demo.model;
import java.sql.Date;
import java.util.List;
public class PlayerActivitySingleTournament {
    private String tourneyName;
    private java.sql.Date tourneyDate;
    private String surface;
    private short rankingUponEntry;
    private java.util.List<PlayerActivitySingleTournamentMatch> matches;

    public PlayerActivitySingleTournament(
            String tourneyName,
            java.sql.Date tourneyDate,
            String surface,
            short rankingUponEntry,
            java.util.List<PlayerActivitySingleTournamentMatch> matches
    ) {
        this.tourneyName=tourneyName;this.tourneyDate=tourneyDate;
        this.surface=surface;this.matches=matches;this.rankingUponEntry = rankingUponEntry;
    }

    public void setTourneyName(String tourneyName) {
        this.tourneyName = tourneyName;
    }

    public String getTourneyName() {
        return tourneyName;
    }

    public void setTourneyDate(Date tourneyDate) {
        this.tourneyDate = tourneyDate;
    }

    public Date getTourneyDate() {
        return tourneyDate;
    }

    public void setSurface(String surface) {
        this.surface = surface;
    }

    public String getSurface() {
        return surface;
    }

    public void setRankingUponEntry(short rankingUponEntry) {
        this.rankingUponEntry = rankingUponEntry;
    }

    public short getRankingUponEntry() {
        return rankingUponEntry;
    }

    public void setMatches(List<PlayerActivitySingleTournamentMatch> matches) {
        this.matches = matches;
    }

    public List<PlayerActivitySingleTournamentMatch> getMatches() {
        return matches;
    }
}
