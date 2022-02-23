import React from "react";
import { Table, TableHead, TableBody, TableCell, TableRow, Tab } from "@material-ui/core";

const PlayerStats = ({playerStats}) => {
    return (
        <>

        <div style={{display:'flex'}}>
            <div style={{flex:1}}>
                <Table>
                    <TableHead>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                    <TableCell>Career W-L</TableCell>
                    <TableCell align="left">{playerStats.careerWins} - {playerStats.careerLosses}</TableCell>
                    </TableRow>
                        <TableRow>
                            <TableCell>Total Aces</TableCell>
                            <TableCell>{playerStats.totalAces}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Double Faults</TableCell>
                            <TableCell>{playerStats.totalDoubleFaults}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1st Serve Made</TableCell>
                            <TableCell>{playerStats.firstServeMadePct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>1st Serve Points Won</TableCell>
                            <TableCell>{playerStats.firstServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2nd Serve Points Won</TableCell>
                            <TableCell>{playerStats.secondServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Break Points Faced</TableCell>
                            <TableCell>{playerStats.breakPointsFaced}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Break Points Saved</TableCell>
                            <TableCell>{playerStats.breakPointsSavedPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Service Games Played</TableCell>
                            <TableCell>{playerStats.serviceGamesPlayed}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Service Games Won</TableCell>
                            <TableCell>{playerStats.serviceGamesWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Service Points Won</TableCell>
                            <TableCell>{playerStats.servicePointsWonPct}%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div style={{flex:1}}>
            <Table>
                    <TableHead>

                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1st Serve Return Points Won</TableCell>
                            <TableCell>{playerStats.returnFirstServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2nd Serve Return Points Won</TableCell>
                            <TableCell>{playerStats.returnSecondServeWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Break Points Opportunities</TableCell>
                            <TableCell>{playerStats.breakPointOpportunities}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Break Points Converted</TableCell>
                            <TableCell>{playerStats.breakPointsConvertedPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Return Games Played</TableCell>
                            <TableCell>{playerStats.returnGamesPlayed}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Return Games Won</TableCell>
                            <TableCell>{playerStats.returnGamesWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Return Points Won</TableCell>
                            <TableCell>{playerStats.returnPointsWonPct}%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Points Won</TableCell>
                            <TableCell>{playerStats.totalPointsWonPct}%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
        </>
    )
}

export default PlayerStats;

/*
                    <div>Career Wins: {playerStats.careerWins}</div>
                    <div>Career Losses: {playerStats.careerLosses}</div>
                    <div>Aces: {playerStats.totalAces}</div>
                    <div>1st Serve Made: {playerStats.firstServeMadePct}</div>
*/