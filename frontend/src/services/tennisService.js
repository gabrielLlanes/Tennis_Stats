import axios from "axios";
const baseUrl = 'http://localhost:8080/api';

const getH2HData = (rivalry) => {
    return axios.post(`${baseUrl}/h2hmatches`, rivalry)
}

const getPlayerNames = () => {
    return axios.get(`${baseUrl}/playernames`)
}

const getPlayerStats = (playerName) => {
    return axios.get(`${baseUrl}/playerstats`, {params:{["Player Name"]:playerName}})
}

const getPlayerActivity = (playerName) => {
    return axios.get(`${baseUrl}/playeractivity`, {params: {['Player Name']:playerName}})
}

export default {getH2HData, getPlayerNames, getPlayerStats, getPlayerActivity}