import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const Namecard = ({ suggestedName }) => {
  return (
    <a
      target="_blank"
      rel="noferrer"
      className="card-link"
      href={`${nameCheapUrl} ${suggestedName}`}
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default Namecard;