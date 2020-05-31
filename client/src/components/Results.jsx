import React, {useState} from 'react';
import axios from 'axios';
import songT from '../audio/song.mp3'
import video from '../audio/bkgd.mp4';
import '../App.css'

const Results = () => {
  const [playerName, setPlayerName] = useState('')
  const [fortniteApi, setFortniteApi] = useState({})
  const getApiData = async (event) => {
    event.preventDefault()
   let {data} = await axios.get(`/api/playerdata/${playerName}`)
   setFortniteApi(data, console.log(data))
  } 
    return(
      <>
      <div>
      <audio id="songVol" autoPlay >
        <source src={songT} type="audio/mpeg">
        </source>
      </audio>
        <h1>"Hi im the results page"</h1>
       <form onSubmit={getApiData}>
         <input type="text" onChange={e => setPlayerName(e.target.value)}/>
       <button onClick={getApiData}>CLICK ME NOW</button>
       </form>
        <p>
        {fortniteApi.name}
        </p>
        <p>
        {fortniteApi.cashPrize}
        
        </p>
    </div>
    <div>
    <video className="bg"
            id="background-video"
            autoPlay={true}
            loop={true}
            style={{
              position: "fixed",
              width: "100%",
              left: 0,
              top: 0
            }}
            >

            <source src={video} type="video/mp4" />
          </video>
    </div>
    </>
    )
}

export default Results;