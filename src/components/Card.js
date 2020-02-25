import React from "react";
import "../styles/Card.css";
import { ReactComponent as Plus } from "../assets/plus.svg";
import CssInfo from "../components/CssInfo";


const Card = props => {
  let classes = `show-text ${props.fontInfo.fontClass}`;

  return (
    <div className="card-container">
      <div className="wrapper">
        <div className="info-container">
          <p className="font-name">{props.fontInfo.fontName}</p>
          <p className="font-author">{props.fontInfo.fontAuthor}</p>
        </div>
        <Plus onClick={props.info} className="plus" />
      </div>
      <div>
      {props.moreInfo ? <CssInfo cancel={props.cancel} fontNam={props.fontNam} links={props.links} fontFam={props.fontFam} /> : null}
      </div>
      <textarea className={classes} type="text">
        {props.text}
      </textarea>
    </div>
  );
};

export default Card;
