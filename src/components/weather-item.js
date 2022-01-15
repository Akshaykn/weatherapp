import classes from './weather-item.module.css';
import { fetchIcons, nameMapping, unitMapping } from './../icons/icons-mappings';
const WeatherItem = (props) => {
  const imageSource = fetchIcons[props.data.id];
  const itemName = nameMapping[props.data.id];
  const itemValue = props.data.value + ' ' + unitMapping[props.data.id];
  return(
    <div className={classes.weatherItem}> 
      <div className={classes.weatherItemInner}> 
        <div className={classes.weatherItemImage}>
          <img 
            src={imageSource} 
            alt={props.data.id} 
            width={30} 
            height={30}/>
        </div>
        <div className={classes.weatherItemTextWrapper}>   
          <div className={classes.weatherItemLabel}> 
            <span> { itemName } </span>
          </div>
          <div className={classes.weatherItemValue}> 
            <span> { itemValue }</span>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default WeatherItem;