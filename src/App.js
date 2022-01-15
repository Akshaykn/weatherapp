import './App.css';
import { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import CurrentWeather from './components/current-weather';
import Corosal from './UI/corosal';
import WeatherItem from './components/weather-item';
import FooterWeather from './components/footer-weather';
function App() {
  const { sendRequest: fetchWeatherData } = useHttp();
  const [weatherData, setWeatherData] = useState({});
  const onRefresh = () => {
    const API_key = '29a2e1cb207927677b85d80bb8e47e13';
    let latitude = 0; 
    let longitude = 0;
    const fetchCordinateValues = new Promise((resolve, reject) => {
      let latitude = 0;
      let longitude = 0;
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      }
      const success = (pos) => {
        let crd = pos.coords;
        latitude = crd.latitude;
        longitude = crd.longitude;
        resolve({
          latitude,
          longitude,
        });
      }
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
    fetchCordinateValues
      .then(response => {
        latitude = response.latitude;
        longitude = response.longitude;
        const requestConfig = {
          url: `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_key}`,
        };
        const transformData = (res) => {
          if (res.statusText === 'OK') {
            setWeatherData(res.data);
          }
        };
        fetchWeatherData(requestConfig, transformData);
      });
  }
  const weatherItems = () => {
    const weatherItems = [];
    const restrictedValues = ['temp', 'feels_like'];
    const weatherDataMap = weatherData ? { ...weatherData.main } : {};
    if (weatherDataMap) {
      for (let key in weatherDataMap) {
        if (!restrictedValues.includes(key)) {
          weatherItems.push({
            id: key,
            value: weatherDataMap[key],
          });
        }
      }
    }  
    return weatherItems;   
  };
  useEffect(() => {
    const API_key = '29a2e1cb207927677b85d80bb8e47e13';
    let latitude = 0; 
    let longitude = 0;
    const fetchCordinateValues = new Promise((resolve, reject) => {
      let latitude = 0;
      let longitude = 0;
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err);
      }
      const success = (pos) => {
        let crd = pos.coords;
        latitude = crd.latitude;
        longitude = crd.longitude;
        resolve({
          latitude,
          longitude,
        });
      }
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
    fetchCordinateValues
      .then(response => {
        latitude = response.latitude;
        longitude = response.longitude;
        const requestConfig = {
          url: `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_key}`,
        };
        const transformData = (res) => {
          if (res.statusText === 'OK') {
            setWeatherData(res.data);
          }
        };
        fetchWeatherData(requestConfig, transformData);
      })
      .catch();
  }, [fetchWeatherData])
  
  return (
    <div className="App">
      <CurrentWeather data={weatherData}>
      </CurrentWeather>
      <Corosal>
       { weatherItems().map((ele, index) => {
         return (
          <WeatherItem 
            key={index}
            data={ele}>  
          </WeatherItem>);
       }) }
      </Corosal>
      <FooterWeather 
        lattitude={weatherData.coord.lat}
        longitude={weatherData.coord.lon}
        onRefresh={onRefresh}>
      </FooterWeather>
    </div>
  );
}

export default App;
