import React from "react";

const devCardIcon = props => {
  return (
    <div className="card text-center" id="infoCard">
      <div className="overflow">
        <img src={props.img} alt="Screenshot of project being showcased" />
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
