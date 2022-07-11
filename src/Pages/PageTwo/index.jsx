import React, { useState, useEffect } from "react";
import "./pagetwo.css";
import { IconContext } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import AutoCompleteItem from "../../Components/autocompleteInputField";
import { connect } from "react-redux";
import { addCapitalToStore } from "../../store/actions";
import { useHistory } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageTwo = (props) => {
  const { push } = useHistory();

  const [userInput, setUserInput] = useState("");
  const [selected, setSelected] = useState("");
  let filterOutSelected =
    props.capitals.countriesCapital &&
    props.capitals.countriesCapital.length > 0 &&
    props.capitals.countriesCapital.filter(
      (item) => !props.selected_capitals.selected_capital.includes(item.capital)
    )

  const [data, setData] = useState([...filterOutSelected]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const selectedField = (e) => {
    setSelected(e.capital);
  };

  const addToCapitalToStore = () => {
    if (selected) {
      props.dispatch(addCapitalToStore(selected));

      push("/");
    }
  };

  useEffect(() => {
    setData(()=> data.filter((item)=> item.capital.includes(userInput)).slice(0, 9))
  }, [userInput]);



 

  return (
    <div className="page-two">
      <div className="headerTwo">
        <Link to={"/"}>
          <IconContext.Provider value={{ color: "#72A0C1", size: "30px" }}>
            <span>
              <FaAngleLeft />
            </span>
          </IconContext.Provider>
        </Link>
      </div>
      <div className="input-icons">
        <i className="icon">
          <IconContext.Provider value={{ color: "#dfdfe7a4", size: "20px" }}>
            <FaAngleDown />
          </IconContext.Provider>
        </i>
        <input
          className="input-field"
          type="text"
          placeholder="Search Capital"
          value={selected ? selected : userInput}
          onChange={handleChange}
        />
      </div>

      {props.capitals.countriesCapital &&
        props.capitals.countriesCapital.length > 0 &&
        filterOutSelected.map((text) => (
          <AutoCompleteItem
            key={text.name}
            text={text && text.capital}
            querySearch={userInput}
            lookUp={() => selectedField(text)}
          />
        ))}
      <div className="footerTwo">
        <p style={{ color: "#72A0C1" }} onClick={addToCapitalToStore}>
          {selected ? "SAVE" : ""}
        </p>
      </div>
    </div>
  );
};

export default connect((state) => ({
  selected_capitals: state.capital_reducer,
}))(PageTwo);
