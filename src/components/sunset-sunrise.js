import { useEffect, useState } from 'react';
import classes from './sunset-sunrise.module.css';
import { fetchIcons, nameMapping } from './../icons/icons-mappings';
const SunsetSunrise = (props) => {
  const hillIcon = fetchIcons['mountain'];
  const sunIcon = fetchIcons['clearsky'];
  const [animate, isAnimate] = useState(false);
  const [stopAnimate, setStopAnimate] = useState(false);
  const transfromValue = (value) => {
    return  new Date(value * 1000).toTimeString();
  };
  const propValue = props.data.mode === 'rise' ? nameMapping['sunrise'] : nameMapping['sunset'];
  const sunsetSunriseAnimationClass = 
    classes[`sunsetSunriseInner--${props.data.mode === 'rise' ?
    'rise' :
    'set'}` ];
  const stopedAnimation = stopAnimate ? classes['animationStoped'] : '';     
  const sunsetSunriseAnimation = ( 
    <div className={`${sunsetSunriseAnimationClass}${animate ? `  ${ classes['animate']}  ${stopedAnimation}` : ''} `}>
      <div className={classes.sunClass}>
        <img src={sunIcon} alt={'sun'}    width={18} height={18}/> 
      </div>   
      <div className={classes.mountainClass}>
        <img src={hillIcon} alt={'hill'}  width={24} height={24}/> 
      </div> 
    </div>
  );
  const sunsetSunriseInfo = (
    <div> 
       <div className={classes.label}><span> { propValue } </span></div>
       <div className={classes.val}><span> { transfromValue(props.data.value) } </span></div>
    </div>
  );  
  useEffect(() => {
    setTimeout(() => {
      isAnimate(true);
      setTimeout(() => {
        setStopAnimate(true); 
      }, 1000); 
    }, 1000);
  }, []);
  return(
    <div className={classes.sunsetSunrise}> 
        { sunsetSunriseAnimation }
        { sunsetSunriseInfo }
    </div>);   
};

export default SunsetSunrise;