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
        showButton: false,
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
        fontFam: 'Roboto',
      },
      {
        fontName: "Odibee Sans",
        fontAuthor: "James Barnard",
        fontClass: "odibeeSans",
        showButton: false,
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap',
        fontFam: 'Odibee Sans',
      },
      {
        fontName: "Open Sans",
        fontAuthor: "Steve Matteson",
        fontClass: "openSans",
        showButton: false,
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap',
        fontFam: 'Open Sans',
      },
      {
        fontName: "Sriracha",
        fontAuthor: "Cadson Demak",
        fontClass: "sriracha",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Sriracha&display=swap',
        fontFam: 'Sriracha',
      },
      {
        fontName: "Trade Winds",
        fontAuthor: "Slideshow",
        fontClass: "tradeWinds",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Trade+Winds&display=swap',
        fontFam: 'Trade Winds',
      },
      {
        fontName: "Akronim",
        fontAuthor: "Grzegorz Klimczewski",
        fontClass: "akronim",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Akronim&display=swap',
        fontFam: 'Akronim',
      },
      {
        fontName: "Lacquer",
        fontAuthor: "Niki Polyocan",
        fontClass: "lacquer",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Lacquer&display=swap',
        fontFam: 'Lacquer',
      },
      {
        fontName: "Shadows Into Light",
        fontAuthor: "Kimberly Geswein",
        fontClass: "shadowsIntoLight",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap',
        fontFam: 'Shadows Into Light',
      },
      {
        fontName: "Dancing Script",
        fontAuthor: "Impallari Type",
        fontClass: "dancingScript",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Dancing+Script&display=swap',
        fontFam: 'Dancing Script',
      },
      {
        fontName: "Amatic SC",
        fontAuthor: "Vernon Adams",
        fontClass: "amaticSC",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Amatic+SC&display=swap',
        fontFam: 'Amatic SC',
      },
      {
        fontName: "Bangers",
        fontAuthor: "Vernon Adams",
        fontClass: "bangers",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Bangers&display=swap',
        fontFam: 'Bangers',
      },
      {
        fontName: "Permanent Marker",
        fontAuthor: "Vernon Adams",
        fontClass: "permanentMarker",
        showInfo: false,
        link: 'https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap',
        fontFam: 'Permanent Marker',
      }
    ],
    text: "Almost before we knew it, we had left the ground.",
    newText: "",
    count: 0
  };
  
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

  infoHandler = index => {
    let infoBox = [...this.state.fontInfo]
    infoBox[index].showInfo = true
    this.setState({fontInfo: infoBox})
    console.log("hi")
  }

  cancelHandler = index => {
    let infoBox2 = [...this.state.fontInfo]
    infoBox2[index].showInfo = false
    this.setState({fontInfo: infoBox2})
    console.log("goodbye")
  }

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
              fontNam={this.state.fontInfo[index].fontName}
              links={this.state.fontInfo[index].link}
              fontFam={this.state.fontInfo[index].fontFam}
              info={() => this.infoHandler(index)}
              cancel={() => this.cancelHandler(index)}
              moreInfo={this.state.fontInfo[index].showInfo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

