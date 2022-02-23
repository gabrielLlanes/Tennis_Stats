import { useState, useEffect } from "react"
import React from "react";
import { Table,TableHead, TableBody, TableCell,TableRow } from "@material-ui/core";

const tableStyle = {borderCollapse: "collapse"};
const tdStyle = {border: "1px solid black", padding:"4px",margin:"1px"};

const buildRows = (rivalryData) => {
    let rows = new Array();
    for(let i = 0; i < rivalryData.length; i++) {
        let tds = new Array();
        rows.push(<TableRow key={i}>
            
            <TableCell>{rivalryData[i].tourneyDate}</TableCell>
            <TableCell>{rivalryData[i].tourneyName}</TableCell>
            <TableCell>{rivalryData[i].surface}</TableCell>
            <TableCell>{rivalryData[i].round}</TableCell>
            <TableCell>{rivalryData[i].winnerName}</TableCell>
            <TableCell>{rivalryData[i].winnerRank}</TableCell>
            <TableCell>{rivalryData[i].loserName}</TableCell>
            <TableCell>{rivalryData[i].loserRank}</TableCell>
            <TableCell>{rivalryData[i].score}</TableCell>
            
        </TableRow>);
    }
    return rows;
}

const Rivalry = ({rivalryData}) => {

    return (
        <div style={{cssText:"text-align:center"}}>
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell><TableCell>Tournament</TableCell><TableCell>Surface</TableCell>
                            <TableCell>Round</TableCell><TableCell>Winner Name</TableCell><TableCell>Winner Rank</TableCell>
                            <TableCell>Loser Name</TableCell><TableCell>Loser Rank</TableCell><TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{buildRows(rivalryData)}</TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Rivalry;