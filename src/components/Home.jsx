
import { clearImage, cloudImage, mistImage, rainImage, snowImage, stormImage, backgroundImage } from '../constant/index'
import { useSharedContext } from "../context/SharedContext";
import { MainCard, WeekCard} from '../constant/index'


const Home = () => {
  const {weeklyWeatherData, isLoading, unit, setUnit} = useSharedContext()

  let weatherImage;
  if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Thunderstorm') {
    weatherImage = stormImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Drizzle') {
    weatherImage = rainImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Rain') {
    weatherImage = rainImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Snow') {
    weatherImage = snowImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Atmosphere') {
    weatherImage = mistImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Clear') {
    weatherImage = clearImage;
  } else if (weeklyWeatherData?.list[0]?.weather[0]?.main === 'Clouds') {
    weatherImage = cloudImage;
  } else {
    weatherImage = backgroundImage; 
  }

  return (
    <div className="flex justify-center items-center flex-col lg:flex-row gap-10 p-5 lg:items-start"
    style={{ backgroundImage: `url(${weatherImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full lg:w-[40%]">
        <MainCard 
        weeklyWeatherData={weeklyWeatherData}
        isLoading={isLoading}
        unit={unit}
        setUnit={setUnit}
        />
      </div>
      <div className="w-full lg:w-[60%]">
        <div className="w-full">
          {
            weeklyWeatherData?.list && weeklyWeatherData?.list.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
              {
                weeklyWeatherData?.list?.slice(1, 7).map(item => <WeekCard
                key={item.dt}
                item={item}
                unit={unit}
                />)
              }
            </div>: (<p> No Data available.</p>)
          }
          
         
        </div>
      </div>
    </div>
  );
};

export default Home;


