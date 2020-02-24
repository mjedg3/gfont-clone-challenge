import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    fontInfo: [
      {
        fontName: "Roboto",
        fontAuthor: "Christian Robertson",
        fontClass: "roboto"
      },
      {
        fontName: "Odibee Sans",
        fontAuthor: "James Barnard",
        fontClass: "odibeeSans"
      },
      {
        fontName: "Open Sans",
        fontAuthor: "Steve Matteson",
        fontClass: "openSans"
      },
      {
        fontName: "Sriracha",
        fontAuthor: "Cadson Demak",
        fontClass: "sriracha"
      },
      {
        fontName: "Trade Winds",
        fontAuthor: "Slideshow",
        fontClass: "tradeWinds"
      },
      {
        fontName: "Akronim",
        fontAuthor: "Grzegorz Klimczewski",
        fontClass: "akronim"
      },
      {
        fontName: "Lacquer",
        fontAuthor: "Niki Polyocan",
        fontClass: "lacquer"
      },
      {
        fontName: "Shadows Into Light",
        fontAuthor: "Kimberly Geswein",
        fontClass: "shadowsIntoLight"
      },
      {
        fontName: "Dancing Script",
        fontAuthor: "Impallari Type",
        fontClass: "dancingScript"
      },
      {
        fontName: "Amatic SC",
        fontAuthor: "Vernon Adams",
        fontClass: "amaticSC"
      },
      {
        fontName: "Bangers",
        fontAuthor: "Vernon Adams",
        fontClass: "bangers"
      },
      {
        fontName: "Permanent Marker",
        fontAuthor: "Vernon Adams",
        fontClass: "permanentMarker"
      }
    ],
    text: "Almost before we knew it, we had left the ground."
  };

  render() {
    return (
      <div className="container">
        {this.state.fontInfo.map((font, index) => {
          return <Card key={index} fontInfo={font} text={this.state.text} />;
        })}
      </div>
    );
  }
}

export default App;
