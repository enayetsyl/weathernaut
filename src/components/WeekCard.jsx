import {
  WbSunnyOutlinedIcon,
  FilterDramaOutlinedIcon,
  UmbrellaOutlinedIcon,
  ThunderstormOutlinedIcon,
  SevereColdOutlinedIcon,
  WaterOutlinedIcon,
  ClearIcon,
  CardContent,
  Typography,
} from "../constant/index";

export default function WeekCard({ item, unit }) {
  const weatherIcon = (icon) => {
    switch (icon) {
      case "01d":
      case "01n":
        return <WbSunnyOutlinedIcon sx={{ fontSize: "80px" }} />;
      case "02d":
      case "03d":
      case "04d":
      case "02n":
      case "03n":
      case "04n":
        return <FilterDramaOutlinedIcon sx={{ fontSize: "80px" }} />;
      case "09d":
      case "10d":
      case "09n":
      case "10n":
        return <UmbrellaOutlinedIcon sx={{ fontSize: "80px" }} />;
      case "11d":
      case "11n":
        return <ThunderstormOutlinedIcon sx={{ fontSize: "80px" }} />;
      case "13d":
      case "13n":
        return <SevereColdOutlinedIcon sx={{ fontSize: "80px" }} />;
      case "50d":
      case "50n":
        return <WaterOutlinedIcon sx={{ fontSize: "80px" }} />;
      default:
        return <ClearIcon sx={{ fontSize: "80px" }} />;
    }
  };

  return (
    <div
      className="bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 hover:border-blue-600  transition-all duration-700 odd:hover:-translate-x-1 odd:hover:-translate-y-1 
    even:hover:translate-x-1
    even:hover:-translate-y-1
    "
    >
      <CardContent>
        <div className="flex justify-between items-center gap-5">
          <div>
            <Typography sx={{ fontSize: 14 }} color="body1" gutterBottom>
              {item.dt_txt}
            </Typography>
            <Typography variant="body2">
              Temperature {item.main.temp}{" "}
              <span>{unit === "celsius" ? "C" : "F"}</span>
            </Typography>
            <Typography variant="body2">
              Feels Like {item.main.feels_like}{" "}
              <span>{unit === "celsius" ? "C" : "F"}</span>
            </Typography>
            <Typography variant="body2">
              Maximum Temp {item.main.temp_max}{" "}
              <span>{unit === "celsius" ? "C" : "F"}</span>
            </Typography>
            <Typography variant="body2">
              Minimum Temp {item.main.temp_min}{" "}
              <span>{unit === "celsius" ? "C" : "F"}</span>
            </Typography>
            <Typography variant="body2">
              Humidity {item.main.humidity}
            </Typography>
          </div>
          <div>{weatherIcon(item?.weather[0]?.icon)}</div>
        </div>
      </CardContent>
    </div>
  );
}
