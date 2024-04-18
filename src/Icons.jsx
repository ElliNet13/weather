import { WiDaySunny, WiRain, WiCloudy, WiSnow } from 'react-icons/wi';

const WeatherIcon = ({ weather }) => {
  switch (weather) {
    case 'Sunny':
      return <WiDaySunny />;
    case 'Rain':
      return <WiRain />;
    case 'Cloudy':
      return <WiCloudy />;
    case 'Snow':
      return <WiSnow />;
    default:
      return null;
  }
};

export default WeatherIcon;