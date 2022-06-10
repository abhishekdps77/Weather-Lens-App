import React from 'react';
import ReactDOM from 'react-dom';
import Temp from './components/weather/Temp';

const apiKey = process.env.REACT_APP_WEATHER_API;

ReactDOM.render(<Temp apiKey={apiKey}/>, document.getElementById('root'));

