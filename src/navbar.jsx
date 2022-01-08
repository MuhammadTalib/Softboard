import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "./class_cover.jpg";
import "./App.css";
const navstyle = {
  color: "#602020",
  marginLeft: "8px",
  fontStyle: "italic"
};
class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white navbar-default fixed-top"
        id="custom-nav"
        role="navigation"
      >
        <i
          className="fas fa-bars"
          style={{
            fontSize: "20px",
            marginLeft: "10px",
            marginRight: "20px",
            marginBottom: "5px",
            color: "#602020"
          }}
        />

        <div
          style={{
            fontFamily: "Akronim",
            height: "50px",
            width: "600px",
            fontSize: "35px",
            color: "#602020"
          }}
        >
          Soft Board
        </div>
        <div className="container" style={{ width: "50%" }} />
        <NavLink className="nav-item nav-link" to="/customers" style={navstyle}>
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals" style={navstyle}>
          Rentals
        </NavLink>
        <NavLink
          className="nav-item nav-link nav-right"
          to="/login"
          style={navstyle}
        >
          Login
        </NavLink>

        <NavLink className="nav-item nav-link" to="/addClass">
          <i
            className="fa fa-plus "
            style={{ fontSize: "30px", marginRight: "20px", color: "#602020" }}
            onClick={this.props.handleForm}
          />
        </NavLink>
        <img
          alt=""
          src={logo}
          style={{
            borderRadius: "50%",
            height: "40px",
            width: "40px"
          }}
        />
      </nav>
    );
  }
}

export default Navbar;
