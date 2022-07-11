import React from "react";
import "./pageone.css";
import { BsPlusLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getCountryCapitalWeather } from "../../store/actions";

const PageOne = ({ selected_capitals, dispatch }) => {
  const { push } = useHistory();

  const moveToPageThree = (e) => {
    let capital = e.target.textContent;
    dispatch(getCountryCapitalWeather(capital));
    push({
      pathname: "/pagethree",
      state: capital,
    });
  };
  return (
    <div className="pageone-container">
      <div className="header"></div>
      <div className="list-of-capital">
        {selected_capitals &&
          selected_capitals.selected_capital.length > 0 &&
          selected_capitals.selected_capital.map((item, index) => (
            <h3 className="capital" key={index} onClick={moveToPageThree}>
              {item}
            </h3>
          ))}
      </div>
      <Link to={"/capital"} className="footer">
        <IconContext.Provider value={{ color: "#39FF14", size: "50px" }}>
          <span>
            <BsPlusLg />
          </span>
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default connect((state) => ({
  selected_capitals: state.capital_reducer,
}))(PageOne);
