### In order to run the application locally please run the following command in your terminal

```javascript
git clone https://github.com/enayetsyl/weathernaut.git

cd weathernaut

npm i

npm run dev

```
- Live link : https://weathernaut-eight.vercel.app/

## Project Overview: Weathernaut

### Introduction:

Weathernaut is a single-page weather application designed to provide users with up-to-date weather information for their desired location. Built using React.js and integrating with the OpenWeatherMap API, Weathernaut offers a seamless experience for users to search for locations, view current weather conditions, and access a 5-day forecast.

### Technology Used:

- React.js: The frontend of Weathernaut is developed using React.js, a popular JavaScript library for building user interfaces. React's component-based architecture enables modular and scalable development.

- OpenWeatherMap API: Weathernaut leverages the OpenWeatherMap API to fetch weather data based on user queries. This API provides comprehensive weather information, including temperature, description, humidity, and more.

- Material-UI: Material-UI is utilized for building the user interface components of Weathernaut. It offers a set of pre-designed React components following the Material Design principles, enhancing the application's visual appeal and usability.

- Axios: Axios is used for making HTTP requests to the OpenWeatherMap API. It simplifies the process of fetching data asynchronously and handling API responses.

- Vite: Vite is employed as the build tool for Weathernaut, offering fast development server and optimized production builds. It provides an efficient development experience with features like hot module replacement and instant server startup.

### Design:

Weathernaut features a clean and intuitive design, with a responsive layout that ensures a consistent experience across different devices and screen sizes. The application incorporates Material-UI's components for a modern and cohesive design language, enhancing usability and accessibility. The use of backdrop filters and subtle animations adds a touch of elegance to the user interface, creating an engaging user experience.

### Functionality:

- Search Bar: Weathernaut includes a search bar where users can input the name of a location to fetch weather information. The search functionality dynamically updates the weather data based on user queries, providing accurate and relevant results.

- Current Weather Display: The application displays the current weather conditions for the searched location, including temperature, description, humidity, and sunrise/sunset times. Weather icons and background images dynamically change based on the weather conditions, enhancing visual representation.
5-Day Forecast: Weathernaut offers a 5-day forecast feature, allowing users to view the predicted weather conditions for the upcoming days. Each forecast card provides detailed information, such as temperature, feels like temperature, maximum and minimum temperature, and humidity.

- Unit Conversion: Users can toggle between different units (Celsius and Fahrenheit) for temperature display, providing flexibility and customization according to their preferences.

- Geolocation Support: Weathernaut supports geolocation, automatically fetching the weather data for the user's current location. This feature offers convenience and enables users to quickly access relevant weather information without manual input.

### Conclusion:

In conclusion, Weathernaut is a robust and user-friendly weather application that combines powerful functionality with an elegant design. By leveraging React.js, Material-UI, and the OpenWeatherMap API, Weathernaut delivers an immersive and informative experience for users seeking accurate weather updates. With its responsive layout, intuitive interface, and comprehensive features, Weathernaut sets the standard for modern weather applications, catering to the needs of users worldwide.

### Note

- When utilizing the OpenWeatherMap API for the 5-day, 3-hour forecast, it's essential to note a discrepancy in the naming convention of city names. For instance, a search for "Dhaka" might return "Samair" as the city name in the API response, despite accurately reflecting the country code as "BD" for Bangladesh.

- Additionally, it's worth noting that the API's geolocation functionality offers an option to limit multiple city searches, typically set to 1 by default.

- In handling these intricacies, it's prudent to ensure proper handling of the received data, including any discrepancies in city names, and to consider adjusting the geolocation settings as needed to align with specific search requirements or constraints.