import React from "react";
import "../components/Navbar.css";

const Navbar = props => {
  console.log(props.val);
  return (
    <div className="navlist">
      <input id="input" onChange={props.searchHandler} value={props.val} />
    </div>
  );
};
export default Navbar;
