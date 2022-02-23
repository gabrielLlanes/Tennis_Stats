//import logo from './logo.svg';
import './App.css';
import {Container, TextField, Button} from '@material-ui/core'
import { useState, useEffect } from 'react';
import TennisService from './services/tennisService';
import Rivalry from './components/Rivalry';
import PlayerStats from './components/PlayerStats';
import PlayerActivity from './components/PlayerActivity'; 

function App() {
  const [currFunction, setCurrFunction] = useState(1);
  const [rivalry, setRivalry] = useState({p1:"", p2:""});
  const [show, setShow] = useState({rivalry:false, indStats:false, indActivity:false});
  const [rivalryData, setRivalryData] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [currentPlayerStats, setCurrentPlayerStats] = useState();
  const [currentPlayerAct, setCurrentPlayerAct] = useState({player:""});
  const [currentPlayerActivity, setCurrentPlayerActivity] = useState([]);

  
  const handleRivalrySubmission = (event) => {
    event.preventDefault();
    TennisService.getH2HData(rivalry).then(response => {
      console.log(response);
      setShow({rivalry:true, indStats:false, indActivity:false});
      setRivalryData(response.data);
    })
  }

  const handlePlayerStatsSubmission = (event) => {
    event.preventDefault();
    TennisService.getPlayerStats(currentPlayer).then(response => {
      console.log(response);
      
      setCurrentPlayerStats(response.data);
      setShow({rivalry:false, indStats:true, indActivity:false});
    })
  }

  const handlePlayerActivitySubmission = (event) => {
    event.preventDefault();
    TennisService.getPlayerActivity(currentPlayerAct.player).then(response => {
      console.log(response);
      setCurrentPlayerActivity(response.data);
      setShow({rivalry:false, indStats:false, indActivity:true});
    })

  }

  const handleP1Change = (event) => {
    setRivalry({...rivalry, p1: event.target.value})
  }

  const handleP2Change = (event) => {
    setRivalry({...rivalry, p2: event.target.value})
  }

  const handlePlayerChange = (event) => {
    setCurrentPlayer(event.target.value);
  }

  const handlePlayerActChange = (event) => {
    setCurrentPlayerAct({player:event.target.value});
  }

  return (
    <div>
      <h1 style={{cssText: "text-align: center"}}>Tennis Statistics and Match Data</h1>
      <div style={{textAlign:'center', padding:"20px"}}>
      <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"#E0E0E0", padding:"20px"}}>
        <div style={{flex:"1", textAlign:"center"}}>
        <Button variant="contained" type="button" onClick={() => {
          setCurrFunction(1);
          setShow({rivalry:false, indStats:false, indActivity:false});
          setCurrentPlayerStats({});
          setCurrentPlayer('');setCurrentPlayerAct({player:''});setCurrentPlayerActivity([]);
          }}>H2H Matches</Button>
        </div>
        <div style={{flex:"1", textAlign:"center"}}>
        <Button variant="contained" type="button" onClick={() => {
          setCurrFunction(2);
          setShow({rivalry:false, indStats:false, indActivity:false})
          setRivalry({p1:'', p2:''}); setRivalryData([]); setCurrentPlayerAct({player:''});setCurrentPlayerActivity([]);
          }}>Individual Player Stats</Button>
        </div>
        <div style={{flex:"1", textAlign:"center"}}>
        <Button variant="contained" type="button" onClick={() => {
          setCurrFunction(3);
          setShow({rivalry:false, indStats:false, indActivity:false})
          setRivalry({p1:'',p2:''});setRivalryData([]); setCurrentPlayer('');setCurrentPlayerStats({})
          }}>Individual Player Activity</Button>
        </div>
      </div>

      </div>
      {currFunction == 1 ? <div style={{textAlign:'center', padding:"20px", borderBottom:"3px solid gray"}}>
        <form onSubmit={handleRivalrySubmission}>
          <div style={{padding:"10px"}}> <span style={{paddingRight:"20px", display:"inline-flex"}}>
            <TextField onChange={handleP1Change} label="Rival 1" InputLabelProps={{ shrink: true }} value={rivalry.p1}></TextField> 
          </span>
          <span style={{paddingLeft:"20px", display:"inline-flex"}}>
            <TextField onChange={handleP2Change} label="Rival 2" InputLabelProps={{ shrink: true }} value={rivalry.p2}></TextField>
          </span></div>
          
          <Button variant="contained" type="submit">Get Rivalry Matches</Button>
        </form>
      </div> : currFunction == 2 ? <div style={{textAlign:'center', padding:"20px", borderBottom:"3px solid gray"}}>
        <form onSubmit={handlePlayerStatsSubmission}>
        <div style={{padding:"10px"}}> <TextField onChange={handlePlayerChange} label="Player" InputLabelProps={{ shrink: true }} value={currentPlayer}></TextField></div>
        <Button variant="contained" type="submit">Get Player Stats</Button>
        </form>
      </div> : currFunction == 3 ? <div style={{textAlign:'center', padding:"20px", borderBottom:"3px solid gray"}}>
        <form onSubmit={handlePlayerActivitySubmission}>
        <div style={{padding:"10px"}}> <TextField onChange={handlePlayerActChange} label="Player" InputLabelProps={{ shrink: true }} value={currentPlayerAct.player}></TextField></div>
        <Button variant="contained" type="submit">Get Player Activity</Button>
        </form>
      </div> : "No selection"}
      {show.rivalry ? 
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          <Rivalry rivalryData={rivalryData}/>
        </div>
      </div> : show.indStats ? 
      <PlayerStats playerStats={currentPlayerStats}/>
       : show.indActivity ? 
      <PlayerActivity playerActivity={currentPlayerActivity} initial={true}/> : "Waiting for Selection"}
    </div>
  );
}


export default App;
