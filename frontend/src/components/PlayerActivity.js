import { Table,TableRow,TableHead,TableBody,TableCell, TextField, Button } from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react";

const PlayerActivity = ({playerActivity}) => {
    const [year, setYear] = useState(2022);
    const [playerActivityMapped, setPlayerActivityMapped] = useState([]);

    

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleYearSubmission = (event) => {
        console.log("Submitted");
        console.log(playerActivity);
        event.preventDefault();
        setPlayerActivityMapped(playerActivity.filter(tourney => {
            return tourney.tourneyDate.startsWith(year.toString())}
            ));
    }
    let tourneys = []

    for(let tourney of playerActivityMapped) {
        tourneys.push (
            <div key={`${tourney.tourneyDate}${tourney.tourneyName}`}>
                <h3 style={{textAlign:"center"}}>{tourney.tourneyName} : {tourney.tourneyDate}</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Round</TableCell>
                            <TableCell>Opponent</TableCell>
                            <TableCell>Result</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tourney.matches.map(match => 
                            <TableRow key={match.round + match.opponent}>
                                <TableCell>{match.round}</TableCell>
                                <TableCell>{match.opponent}</TableCell>
                                <TableCell>{match.result}</TableCell>
                                <TableCell>{match.score}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )
    } 
    return (
        <>
        <div style={{textAlign:"center"}}>
            <form onSubmit={handleYearSubmission}>
                <div>
                    <TextField label="Year" type="number" min="1995" max="2022" value={year} onChange={handleYearChange}></TextField>
                </div>
                <div style={{padding:"10px"}}><Button variant="contained" type="submit">Filter By Year</Button></div>
            </form>
        </div>
        {tourneys}
        </>
    )
}

export default PlayerActivity;