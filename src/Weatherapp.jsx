// import InfoBox from "./InfoBox";
// import SearchBox from "./SearchBox";
// import { useState } from "react";

// export default function WeatherApp(){
//     const [WeatherInfo, setWeatherInfo] = useState({ city:"Delhi",
//         Weather: "mist",
//     feelsLike: 37.05,
//     humidity: 89,
//     temp: 30.05,
//     tempMin: 30.05,
//     temp_Max:30.05});

//     let updateInfo =(newinfo)=>{
//         setWeatherInfo(newinfo);
//     }
//     return(
//         <div style={{textAlign:"center"}}>
//             <h2>Weather App </h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={WeatherInfo}/>
//         </div>

//     )

// }import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    // Initialize with an empty object to prevent displaying the card initially
    const [WeatherInfo, setWeatherInfo] = useState({});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); // Update weather info on successful search
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            {/* Conditionally render the InfoBox only if there is weather info */}
            {Object.keys(WeatherInfo).length > 0 && <InfoBox info={WeatherInfo} />}
        </div>
    );
}
