import React from 'react';
import WeatherIcon from './Icons';

const WeatherCard = ({ city, weather, temperature, description }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <div className="weather-info">
        <WeatherIcon weather={weather} />
        <p>{description}</p>
      </div>
      <p>Temperature: {temperature}°C</p>
    </div>
  );
};

const WeatherForecast = ({ forecasts }) => {
  return (
    <div className="weather-forecast">
      <h2>Weather Forecast</h2>
      <div className="forecast-list">
        {forecasts.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <WeatherIcon weather={forecast.weather} />
            <p>{forecast.date}</p>
            <p>{forecast.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeatherCard, WeatherForecast };