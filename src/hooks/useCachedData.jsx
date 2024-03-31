// Import necessary dependencies
import { useEffect, useState } from "react";
import { useSharedContext } from "../context/SharedContext";

// Define a custom hook to handle caching during the session
export const useWeatherDataCache = () => {
  const { weeklyWeatherData, isLoading } = useSharedContext();
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    // Check if weeklyWeatherData exists and not loading
    if (weeklyWeatherData && !isLoading) {
      // Convert data to JSON and store in sessionStorage
      sessionStorage.setItem("weatherData", JSON.stringify(weeklyWeatherData));
      setCachedData(weeklyWeatherData);
    } else {
      // If data is not available, try to retrieve from sessionStorage
      const cachedWeatherData = sessionStorage.getItem("weatherData");
      if (cachedWeatherData) {
        setCachedData(JSON.parse(cachedWeatherData));
      }
    }
  }, [weeklyWeatherData, isLoading]);

  return cachedData;
};
