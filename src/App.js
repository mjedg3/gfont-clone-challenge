import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    fontInfo: [
      { fontName: "Roboto", fontAuthor: "Christian Robertson", fontClass: "roboto", showInfo: false, link: 'https://fonts.googleapis.com/css?family=Roboto&display=swap', fontFam: 'Roboto',} ,
      { fontName: "Odibee Sans", fontAuthor: "James Barnard", fontClass: "odibeeSans", showInfo: false, link: 'https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap', fontFam: 'Odibee Sans',},
      { fontName: "Open Sans", fontAuthor: "Steve Matteson", fontClass: "openSans", showInfo: false, link: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap', fontFam: 'Open Sans',},
      { fontName: "Sriracha", fontAuthor: "Cadson Demak", fontClass: "sriracha", showInfo: false, link: 'https://fonts.googleapis.com/css?family=Sriracha&display=swap', fontFam: 'Sriracha',}
    ],
    text: "Almost before we knew it, we had left the ground.",
    count: 0
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
          return  <Card key={index} fontInfo={font} text={this.state.text} fontNam={this.state.fontInfo[index].fontName} links={this.state.fontInfo[index].link} fontFam={this.state.fontInfo[index].fontFam} info={() => this.infoHandler(index)} cancel={() => this.cancelHandler(index)} moreInfo={this.state.fontInfo[index].showInfo}/>
        })}
      </div>
    );
  }
}

export default App;

