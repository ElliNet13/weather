import React from 'react';
import { WeatherCard, WeatherForecast } from './Weather';

const App = () => {
  const currentWeather = {
    city: 'New York',
    weather: 'Sunny',
    temperature: 25,
    description: 'Clear sky',
  };

  const forecasts = [
    { weather: 'Sunny', date: 'Monday', temperature: 26 },
    { weather: 'Rain', date: 'Tuesday', temperature: 22 },
    { weather: 'Cloudy', date: 'Wednesday', temperature: 20 },
    { weather: 'Snow', date: 'Thursday', temperature: 18 },
  ];

  return (
    <div>
      <WeatherCard {...currentWeather} />
      <WeatherForecast forecasts={forecasts} />
      <p>Remember, this is example data!</p>
    </div>
  );
};

export default App;