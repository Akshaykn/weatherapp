import { fetchIcons } from "../icons/icons-mappings";
import classes from './footer-weather.module.css';
const FooterWeather = (props) => {
   const cordinatesIcon =  fetchIcons['earth'];
   const refreshIcon = fetchIcons['refresh'];
   return (
      <div className={classes.footerWeather}>
        <div className={classes.footerWeatherInner}>
           <div className={classes.cordinates}>
              <img src={cordinatesIcon} 
                   alt={'earth'} 
                   width={24} 
                   height={24}/>
              <div> 
                <span> { 'lat: ' + props.lattitude +', long: ' + props.longitude } </span>
              </div>     
           </div>
           <div className={classes.refresh}
                onClick={props.onRefresh}> 
              <img src={refreshIcon} 
                   alt={'refresh Icon'} 
                   width={24} 
                   height={24}/> 
           </div>
        </div>  
      </div>
    );
};

export default FooterWeather;