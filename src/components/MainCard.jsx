import { convertTimestampToDateTime } from "../lib/timeConvert";
import { useSharedContext } from "../context/SharedContext";
import {WbSunnyOutlinedIcon, FilterDramaOutlinedIcon,UmbrellaOutlinedIcon, ThunderstormOutlinedIcon,SevereColdOutlinedIcon,WaterOutlinedIcon, ClearIcon, CardContent, Typography, TempToggleButton,LinearProgress,Stack } from "../constant/index";



export default function MainCard() {
  const {weeklyWeatherData, isLoading, unit, setUnit } = useSharedContext()
  const weatherIcon = (icon) => {
    switch (icon) {
      case "01d":
      case "01n":
        return <WbSunnyOutlinedIcon sx={{ fontSize: "120px" }} />;
      case "02d":
      case "03d":
      case "04d":
      case "02n":
      case "03n":
      case "04n":
        return <FilterDramaOutlinedIcon sx={{ fontSize: "120px" }} />;
      case "09d":
      case "10d":
      case "09n":
      case "10n":
        return <UmbrellaOutlinedIcon sx={{ fontSize: "120px" }} />;
      case "11d":
      case "11n":
        return <ThunderstormOutlinedIcon sx={{ fontSize: "120px" }} />;
      case "13d":
      case "13n":
        return <SevereColdOutlinedIcon sx={{ fontSize: "120px" }} />;
      case "50d":
      case "50n":
        return <WaterOutlinedIcon sx={{ fontSize: "120px" }} />;
      default:
        return <ClearIcon sx={{ fontSize: "120px" }} />;
    }
  };
  console.log(weeklyWeatherData);

  return (
    <div className="bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 h-72 md:h-96 hover:border-blue-600 hover:-translate-y-1 transition-all duration-700 hover:translate-x-1">
      {isLoading ? (
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}
         marginTop={10}
         >
         <LinearProgress color="warning" />
         <LinearProgress color="success" />
         <LinearProgress color="error" />
       </Stack>
      ) : (
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
              ? weeklyWeatherData?.list[0]?.dt_txt
              : "N/A"}
          </Typography>
          <div className="flex justify-between  gap-5 relative">
            <div>
              <Typography variant="h5" component="div">
                {weeklyWeatherData?.city && weeklyWeatherData?.city?.name}({weeklyWeatherData?.city && weeklyWeatherData?.city?.country})
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"
              style={{ textTransform: 'capitalize' }}              
              >
                {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
                  ? weeklyWeatherData?.list[0]?.weather[0]?.description
                  : "N/A"}
              </Typography>

              <Typography variant="body2">
                {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
                  ? weeklyWeatherData?.list[0]?.weather[0]?.main
                  : "N/A"}
              </Typography>
              <div className="pt-5">
                {weatherIcon(weeklyWeatherData?.list[0]?.weather[0]?.icon)}
              </div>
            </div>
            <div className="absolute right-0 bottom-0"><TempToggleButton
            setUnit={setUnit}
            /></div>
            <div>
              <Typography variant="body1" component="div">
                Temperature{" "}
                {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
                  ? weeklyWeatherData?.list[0]?.main?.temp
                  : "N/A"}{" "}
                <span>{unit === 'celsius' ? 'C' : 'F'}</span>
              </Typography>
              <Typography variant="body1" component="div">
                Feels Like{" "}
                {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
                  ? weeklyWeatherData?.list[0]?.main?.feels_like
                  : "N/A"}{" "}
                <span>{unit === 'celsius' ? 'C' : 'F'}</span>
              </Typography>
              <Typography variant="body1" component="div">
                Humidity{" "}
                {weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0
                  ? weeklyWeatherData?.list[0]?.main?.humidity
                  : "N/A"}
              </Typography>
              <Typography variant="body1" component="div">
                Sunrise{" "}
                {weeklyWeatherData?.city &&
                  convertTimestampToDateTime(weeklyWeatherData?.city?.sunrise)}
              </Typography>
              <Typography variant="body1" component="div">
                Sunrise{" "}
                {weeklyWeatherData?.city &&
                  convertTimestampToDateTime(weeklyWeatherData?.city?.sunset)}
              </Typography>

            
            </div>
          </div>
        </CardContent>
      )}
    </div>
  );
}
