import React, { useState } from 'react';
import axios from 'axios';
import songT from '../audio/song.mp3'
import '../App.css';
import ReactTypingEffect from 'react-typing-effect';
import Button from 'react-bootstrap/Button'

const Results = () => {
  const [playerName, setPlayerName] = useState('');
  const [fortniteApi, setFortniteApi] = useState({});
  const getApiData = async (event) => {
    event.preventDefault();
    let { data } = await axios.get(`/api/playerdata/${playerName}`);
    setFortniteApi(data, console.log(data));
  };
  return (
    <>
      <div>
        <h1>
          <ReactTypingEffect text="Earning's Check"/>

          
        </h1>
        <form className="center" onSubmit={getApiData}>
          <input type="text" onChange={(e) => setPlayerName(e.target.value)} />
          <Button variant="outline-info"onClick={getApiData}>RESULTS</Button>
          <p>{fortniteApi.name}</p>
        <p>${fortniteApi.cashPrize}</p>
        </form>
      </div>
      <audio id="songVol" autoPlay>
        <source src={songT} type="audio/mpeg"></source>
      </audio>
      <style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');
</style>

    </>
  );
};

export default Results;
