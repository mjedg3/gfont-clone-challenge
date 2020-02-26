import React from "react";
import "../styles/Navbar.css";
import search from "../assets/searchIcon.png"

const Navbar = props => {
  console.log(props.val);
  return (
    <div className="nav-box">
      <img className="search" src={search}/>
      <input placeholder="Search fonts" id="input" onChange={props.searchHandler} value={props.val} />
    </div>
  );
};
export default Navbar;
