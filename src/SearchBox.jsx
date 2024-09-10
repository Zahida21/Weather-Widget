import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({ updateInfo}){
    const [city, setCity] = useState("");
    const [error, seterror] = useState(false);
    

    const API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
let getWeatherInfo= async()=>{
    try{
        let response =  await fetch(`${API_URL}?q=${city} &appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        
        let result={
          city:city,
          temp: jsonResponse.main.temp,
          tempMin:jsonResponse.main.
          temp_min,
          temp_Max:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          feelsLike:jsonResponse.main.
          feels_like,
          Weather:jsonResponse.weather[0].description,
          
        };
        console.log(result);
        return result;

    } catch(err){
        throw err;
    }
  
}



let handlechange=(evt)=>{
    setCity(evt.target.value);
    if (error) seterror(false);
};

let handlesubmit=async(evt)=>{
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newinfo=await getWeatherInfo();
       updateInfo(newinfo);
       
    }catch(err){
        seterror(true);
    }
   
    
};

    return(<div className='searchbox'>
        
        <form onSubmit={handlesubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
        <br></br><br></br>
        <Button variant="contained" type='submit' >
       Search
      </Button>
      {error &&  <p style={{color:"red"}}>No such place exist</p>}
      </form>
    </div>)
}