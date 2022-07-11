import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaAngleLeft } from "react-icons/fa";
import "./pagethree.css";
import { connect } from "react-redux";
import moment from "moment";
import Clock from "../../Components/clockComponent";
import { getCountryCapitalWeather } from "../../store/actions";

const PageThree = ({ weather_details, dispatch, ...props }) => {
  const capital = props.location.state
  let response = weather_details.response;

  useEffect(()=>{
    if(response === null){
      dispatch(getCountryCapitalWeather(capital))
    }

  },[capital])

  

  return (
    <div className="page-three-container">
      <div className="headerTwo">
        <Link to={"/"}>
          <IconContext.Provider value={{ color: "#72A0C1", size: "30px" }}>
            <span>
              <FaAngleLeft />
            </span>
          </IconContext.Provider>
        </Link>
      </div>
      <div className="detail-display">
        <Clock />
        <div className="name">{weather_details?.response?.name}</div>

        <div className="image">
          {response.weather[0].main.toLowerCase() === "rain" ? (
            <i className="wi wi-rain"></i>
          ) : response.weather[0].main.toLowerCase() === "clouds" ||
            response.weather[0].main.toLowerCase() === "cloud" ||
            response.weather[0].main.toLowerCase() === "cloudy" ? (
            <i className="wi wi-cloudy"></i>
          ) : response.weather[0].main.toLowerCase() === "sun" ||
            response.weather[0].main.toLowerCase() === "sunny" ? (
            <i className="wi wi-sunny"></i>
          ) : response.weather[0].main.toLowerCase() === "snow" ? (
            <i className="wi wi-snow"></i>
          ) : response.weather[0].main.toLowerCase() === "lightning" ? (
            <i className="wi wi-lightning"></i>
          ) : response.weather[0].main.toLowerCase() === "fog" ? (
            <i className="wi wi-fog"></i>
          ) : response.weather[0].main.toLowerCase() === "wind" ? (
            <i className="wi wi-wind"></i>
          ) : response.weather[0].main.toLowerCase() === "dust" ? (
            <i className="wi wi-dust"></i>
          ) : response.weather[0].main.toLowerCase() === "clear" ? (
            <i className="wi wi-night-clear"></i>
          ) : (
            <i className="wi wi-sunny"></i>
          )}

          <p>{response.weather[0].description}</p>
        </div>

        <div className="temp">
          <div className="same-width">
            <i className="wi wi-thermometer"></i>{" "}
          </div>
          <div className="the-same-color">
              {Math.round(response.main.temp)} °C
          </div>
        </div>

        <div className="sun-rise">
        <div className="same-width">
            <i className="wi wi-sunrise"></i>{" "}
          </div>{" "}
          <div className="the-same-color">
            {moment((response.sys.sunrise + response.timezone) * 1000).format("HH:MM")}
          </div>
        </div>

        <div className="sun-set">
        <div className="same-width">
            <i className="wi wi-sunset"></i>{" "}
          </div>{" "}
          <div className="the-same-color">
            {moment((response.sys.sunset + response.timezone) * 1000).format("HH:MM")}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default PageThree;

export default connect((state) => ({
  selected_capitals: state.capital_reducer,
  weather_details: state.weather_reducer,
}))(PageThree);
