
import axios from 'axios'
import  { createContext, useContext, useEffect, useState } from 'react'


const SharedContext = createContext()
const apiKey = '146b41a45d51d28d8c5024ce06631a3b';
const SharedContextProvider = ({children}) => {
  const [weatherData, setWeatherData] = useState(null)
  const [weeklyWeatherData, setWeeklyWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [unit, setUnit] = useState('metric')
  const [place, setPlace] = useState('')
  const [city, setCity] = useState('barisal')

  useEffect(() => {
    // Function to get user's location
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Success callback for geolocation
    const successCallback = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);
      const unit = 'metric'
      weeklyForecast(latitude, longitude, unit);
    };

    // Error callback for geolocation
    const errorCallback = (error) => {
      console.error("Error getting user's location:", error.message);

    };

    getUserLocation();
  }, []); 


  const latitude = weatherData && weatherData[0]?.lat
  const longitude = weatherData && weatherData[0]?.lon


  const callWeather = async (city) => {
    
    try {
      setIsLoading(true)
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&APPID=${apiKey}`
      );
      console.log(response.data)
      setWeatherData(response.data)
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  const weeklyForecast = async(latitude, longitude, unit) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=7&units=${unit}&appid=${apiKey}`)
      console.log(response.data)
    setWeeklyWeatherData(response.data)
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }
  
  const submitCity = () => {
    setCity(place)
    setPlace('')
  }
  

  useEffect(() => {
    callWeather(city);
  }, [city]);

  useEffect(() => {
    if(latitude){
      weeklyForecast(latitude,longitude,unit)
    }
  },[latitude,longitude, unit])

  const value = {
    weatherData, setWeatherData, weeklyWeatherData, setWeeklyWeatherData, isLoading, setIsLoading, unit, setUnit, place, setPlace, city, setCity, submitCity, 
  }

  return (
    <SharedContext.Provider value={value}>{children}</SharedContext.Provider>
  )
}

export default SharedContextProvider


export const useSharedContext = () => useContext(SharedContext)