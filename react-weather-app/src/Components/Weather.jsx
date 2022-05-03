import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=a5eaed71a6e1cec106332f59967f56d0"
      )
      .then((response) => {
        setCountry(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  if(!country) { 
      return null
    }

  return (
  
      <div >
        {/* <p className="country-temp">  {country.main.temp.toFixed(0)} F </p> */}
        
        <h2 className="country-city-name"> {country.name} </h2> 
      
      
      </div>
      
      );
}

export default Weather;
