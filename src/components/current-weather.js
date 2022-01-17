import classes from './current-weather.module.css';
import { unitMapping } from './../icons/icons-mappings';
const CurrentWeather = (props) => {
  const parseMonth = {
    0 : 'Jan',
    1 : 'Feb',
    2 : 'Mar',
    3 : 'Apr',
    4 : 'May',
    5 : 'Jun',
    6 : 'Jul',
    7 : 'Aug',
    8 : 'Sep',
    9 : 'Oct',
    10 : 'Nov',
    11 : 'Dec',
  };
  const parseDate = (value) => {
    const dateString = new Date(value * 1000).getDate();
    const monthString = new Date(value * 1000).getMonth();
    const yearString = new Date(value * 1000).getFullYear();
    const monthValue = parseMonth[+monthString] || '';
    return dateString + ' ' + monthValue + ' ' + yearString;
  };  
  const currentTemperature = <span> { props?.data?.main?.temp + '' + unitMapping['temp'] || '' } </span>;
  const currentWeatherDesc = <span> 
     { props?.data?.weather  ? props?.data?.weather[0]?.description :''} 
  </span>;
  const currentDate = <span> { parseDate(props.data.dt) } </span>
  const iconValue = props?.data?.weather ?
    `https://openweathermap.org/img/wn/${props?.data?.weather[0]?.icon}.png` :
    '';
  return (
    <div className={classes.currentWeather}>
      <div className={classes.currentWeatherInner}>
        <section className={classes.weatherSection1}>
          <div className={classes.cityName}> { props.data.name } </div>
          <div className={classes.temperature}> 
            { currentTemperature }
            { currentDate } 
          </div>
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