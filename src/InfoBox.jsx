import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const init_url='https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
    const HOT_URL="https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url="https://plus.unsplash.com/premium_photo-1664910358669-b19dce4be056?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox ">
            
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? rain_url:(info.temp>15 ?HOT_URL:cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity >80 ? <ThunderstormIcon/>:(info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/> )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'  }} component={'span'}>
     <p>Temperature = {info.temp}&deg;C</p>
     <p>Humidity = {info.humidity}</p>
     <p>Min Temp ={info.tempMin}</p>
     <p>Max Temp = {info.temp_Max}</p>
     <p>The weather can be described as <b><i>{info.Weather}</i></b> and feels like {info.feelsLike}&deg;C</p>
     
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}
