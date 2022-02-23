package com.example.demo.miscTools.comparators;

import com.example.demo.miscTools.comparators.RoundComparator;
import com.example.demo.model.PlayerActivitySingleTournamentMatch;

import java.util.Comparator;

public class SingleTournamentMatchComparator implements Comparator<PlayerActivitySingleTournamentMatch>{
    @Override
    public int compare(PlayerActivitySingleTournamentMatch a, PlayerActivitySingleTournamentMatch b) {
        return RoundComparator.getComparator().compare(a.getRound(), b.getRound());
    }

}
