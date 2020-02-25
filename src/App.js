import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    fontInfo: [
      {
        fontName: "Roboto",
        fontAuthor: "Christian Robertson",
        fontClass: "roboto",
        showButton: false
      },
      {
        fontName: "Odibee Sans",
        fontAuthor: "James Barnard",
        fontClass: "odibeeSans",
        showButton: false
      },
      {
        fontName: "Open Sans",
        fontAuthor: "Steve Matteson",
        fontClass: "openSans",
        showButton: false
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
    text: "Almost before we knew it, we had left the ground.",
    newText: ""
  };
  s;
  handleChange = (event, index) => {
    console.log(index);
    let newFontInfo = [...this.state.fontInfo];
    for (let i = 0; i < newFontInfo.length; ++i) {
      newFontInfo[i].showButton = false;
    }
    newFontInfo[index].showButton = true;
    this.setState({ fontInfo: newFontInfo });
    this.setState({ newText: event.target.value });
    //  this.setState({ showButton: true });
  };

  clickHandler = event => {
    console.log("does this work");
    let temp = this.state.newText;
    this.setState({ text: temp });
  };

  render() {
    return (
      <div className="container">
        {this.state.fontInfo.map((font, index) => {
          return (
            <Card
              key={index}
              fontInfo={font}
              text={this.state.text}
              showButton={font.showButton}
              handleChange={event => this.handleChange(event, index)}
              newText={this.state.newText}
              clickHandler={event => this.clickHandler(event)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
