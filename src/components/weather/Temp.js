import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import './style.css';


const Temp = (props) => {
    const [searchValue , setSearchValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async()=>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${props.apiKey}&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            //console.log(data);

            const {temp, humidity , pressure} = data.main;
            const {main:weatherMood, icon} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
            
            const myNewWeatherIndo ={
                temp,
                pressure,
                humidity,
                weatherMood,
                name,
                speed,
                country,
                sunset,  
                icon,
            }
            setTempInfo(myNewWeatherIndo)
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
    

    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        id='search'
                        className='searchTerm' 
                        value={searchValue}
                        onChange={(event)=> setSearchValue(event.target.value)}
                        />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

           <WeatherCard tempInfo={tempInfo}/>
        </>
    )
}

export default Temp;