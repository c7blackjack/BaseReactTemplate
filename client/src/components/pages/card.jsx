import React from "react";

const devCardIcon = props => {
  return (
    <div className="card text-center" id="infoCard">
      <div className="cardPic">
        <h1 id="cardFavicon"> {props.favi}</h1>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.cardContent}</p>
        <a href="#" className="btn btn-outline-success">
          Go Here
        </a>
      </div>
    </div>
  );
};

export default devCardIcon;
