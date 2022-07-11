import React from "react";

const AutoCompleteItem = ({ text, querySearch, lookUp }) => {
  let lowerText = text.toLowerCase();
  let lowerQuerySearch = querySearch.toLowerCase();


  if (!querySearch.trim()) {
    return "";
  }
  const regex = new RegExp(`(${lowerQuerySearch})`, "gi");
  const parts = lowerText.split(regex);
  let filt = parts.filter((part) => part);
  return (
    <span onClick={lookUp} >
      {filt.includes(lowerQuerySearch) &&
        filt.map((part, i) =>
          regex.test(part) ? (
            <span  style={{ color: "#72A0C1" }} key={i}>
              {i === 0 ? `${part[0].toUpperCase()}${part.slice(1)}` : part}
            </span>
          ) : (
            <span key={i}>
              {i === 0 ? `${part[0].toUpperCase()}${part.slice(1)}` : part}
            </span>
          )
        )}
    </span>
  );
};
export default AutoCompleteItem;
