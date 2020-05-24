import React, {useState} from 'react';
import axios from 'axios';


const Results = () => {
  const [fortniteApi, setFortniteApi] = useState({}) 
  const getApiData = async () => {
   let {data} = await axios.get("/api/playerdata")
   setFortniteApi(data, console.log(data))
  } 
    return(
      <>
        <h1>"Hi im the results page"</h1>
       <button onClick={getApiData}>CLICK ME NOW and some shit</button>
    <div>
        <p>
        {fortniteApi.epicUserHandle}
        </p>
        <p>
        {fortniteApi.lifeTimeStats &&
        fortniteApi.lifeTimeStats[11].key
        }
        {fortniteApi.lifeTimeStats &&
        fortniteApi.lifeTimeStats[11].value
        }
        </p>
        
    </div>
    </>
    )
}

export default Results;