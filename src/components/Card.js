import React from "react";
import "../styles/Card.css";
import { ReactComponent as Plus } from "../assets/plus.svg";

const Card = props => {
  let classes = `show-text ${props.fontInfo.fontClass}`;

  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="info-container">
          <p className="font-name">{props.fontInfo.fontName}</p>
          <p className="font-author">{props.fontInfo.fontAuthor}</p>
        </div>
        <Plus className="plus" />
      </div>
      <textarea
        onChange={props.handleChange}
        className={classes}
        type="text"
        value={props.showButton ? undefined : props.text}
      ></textarea>

      {props.showButton ? (
        <button onClick={props.clickHandler} className="button">
          APPLY TO ALL FONTS
        </button>
      ) : null}
    </div>
  );
};

export default Card;
