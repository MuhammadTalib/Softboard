import React, { Component } from "react";
import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import logo from "../class_cover.jpg";
const subnamestyle = {
  fontFamily: "Lato",
  fontStyle: "bold",
  position: "absolute",
  color: "#fff",
  fontSize: "15px",
  margin: "75px 50px 0px 20px"
};
const namestyle = {
  fontFamily: "Lato",
  fontStyle: "bold",
  position: "absolute",
  color: "#fff",
  fontSize: "30px",
  margin: "15px 50px 0px 20px"
};
const bodystyle = {
  position: "absolute",
  marginTop: "110px",
  marginLeft: "-1px",
  height: "180px",
  width: "300px",
  borderRadius: "0px 0px 10px 10px",

  backgroundColor: " #ffffe6"
};
const cardstyle = {
  marginLeft: "-1px",
  height: "290px",
  width: "300px",
  margin: "40px 0px -10px 30px",
  borderRadius: "10px"
};
class ClassComponent extends Component {
  state = {
    _name: this.props._name,
    _teacher: this.props._teacher
  };
  render() {
    return (
      <div>
        <Card style={cardstyle}>
          <CardTitle style={namestyle}>{this.state._name}</CardTitle>
          <CardSubtitle style={subnamestyle}>
            {this.state._teacher}
          </CardSubtitle>
          <CardImg
            style={{
              borderRadius: "10px 10px 0px 0px",
              height: "110px",
              marginLeft: "-1px",
              width: "300px"
            }}
            top
            width="100%"
            src={logo}
            alt="Card image cap"
          />
          <div className="card primary" style={bodystyle}>
            <CardText />
          </div>
        </Card>
      </div>
    );
  }
}

export default ClassComponent;
