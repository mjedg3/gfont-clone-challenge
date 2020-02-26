import React from "react";
import "../styles/CssInfo.css"

const CssInfo = (props) => {

    return (
        <div className="box-container">
            <div className="topBar">
                <div>
                    <p id="title">Families Selected</p>
                </div>
                <div>
                    <button onClick={props.cancel}>_</button>
                </div>
            </div>
             
            <div className="wrap">
                <div className="info-container2">
                    <div className="box">{props.fontFam}</div>
                    <p className="box2">@import url ('{props.links}')</p>
                    <div className="line"></div>
                    <p className="box2">font-family: {props.fontFam} ;</p>
                </div>
            </div>
        </div>
    )
}

export default CssInfo;