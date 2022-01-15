import classes from './current-weather.module.css';
import { unitMapping } from './../icons/icons-mappings';
const CurrentWeather = (props) => {
  const currentTemperature = <span> { props?.data?.main?.temp + '' + unitMapping['temp'] || '' } </span>;
  const currentWeatherDesc = <span> 
     { props?.data?.weather  ? props?.data?.weather[0]?.description :''} 
  </span>; 
  const iconValue = props?.data?.weather ?
    `https://openweathermap.org/img/wn/${props?.data?.weather[0]?.icon}.png` :
    ''; 
  return (
    <div className={classes.currentWeather}>
      <div className={classes.currentWeatherInner}>
        <section className={classes.weatherSection1}>
          <div className={classes.cityName}> { props.data.name } </div>
          <div className={classes.temperature}> { currentTemperature } </div>
        </section>
        <section className={classes.weatherSection2}>
          <div className={classes.imageWrapper}> 
            { props.data && 
              <img 
                src={iconValue} 
                alt="imagePic" 
                width={40} 
                height={40}/>} 
          </div>
          <div className={classes.weatherDesc}> { currentWeatherDesc } </div> 
        </section>
      </div>
    </div>
  );
};
export default CurrentWeather;