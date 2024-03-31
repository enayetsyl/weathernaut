### In order to run the application locally please run the following command in your terminal

```javascript
git clone https://github.com/enayetsyl/weathernaut.git

cd weathernaut

npm i

npm run dev

```


### Note

- When utilizing the OpenWeatherMap API for the 5-day, 3-hour forecast, it's essential to note a discrepancy in the naming convention of city names. For instance, a search for "Dhaka" might return "Samair" as the city name in the API response, despite accurately reflecting the country code as "BD" for Bangladesh.

- Additionally, it's worth noting that the API's geolocation functionality offers an option to limit multiple city searches, typically set to 1 by default.

- In handling these intricacies, it's prudent to ensure proper handling of the received data, including any discrepancies in city names, and to consider adjusting the geolocation settings as needed to align with specific search requirements or constraints.