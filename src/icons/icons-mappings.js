import sea_level from './coastal.png';
import feels_like from './celsius.png';
import grnd_level from './ground.png';
import humidity from './humidity.png';
import pressure from './pressure.png';
import temp from './celsius.png';
import temp_max from './celsius.png';
import temp_min from './celsius.png';
import clouds from './cloud.png';
import rain from './rain.png';
import clearsky from './sun.png';
import earth from './earth.png';
import refresh from './refresh.png';
const fetchIcons = {
    sea_level,
    feels_like,
    grnd_level,
    humidity,
    pressure,
    temp,
    temp_max,
    temp_min,
    clouds,
    rain,
    clearsky,
    earth,
    refresh,
};

const nameMapping = {
    sea_level: 'Sea level',
    feels_like: 'feels Like',
    grnd_level: 'Ground Level',
    humidity : 'Humidity',
    pressure: 'Pressure',
    temp: 'Temperature',
    temp_max :'Max Temperature',
    temp_min:'Min Temperature', 
};

const unitMapping = {
    sea_level: 'm',
    feels_like: '°C',
    grnd_level: 'm',
    humidity : '%',
    pressure: 'hPa',
    temp: '°C',
    temp_max :'°C',
    temp_min:'°C',
};

export { 
  fetchIcons,
  nameMapping,
  unitMapping,
};