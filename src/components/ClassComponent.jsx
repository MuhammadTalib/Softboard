import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
const namestyle = {
  color: "#fff",
  margin: "15px 0px 0px 20px",
  fontSize: "20px",
  fontStyle: "bold",
  position: "absolute"
};
const bodystyle = {
  position: "absolute",
  marginTop: "100px",
  marginLeft: "-1px",
  height: "190px",
  width: "300px",
  borderRadius: "0px 0px 10px 10px"
};
const cardstyle = {
  height: "290px",
  width: "300px",
  margin: "40px 0px -10px 30px",
  borderRadius: "10px"
};
class ClassComponent extends Component {
  render() {
    return (
      <div>
        <Card style={cardstyle}>
          <CardTitle style={namestyle}>This Is Class Title</CardTitle>
          <CardImg
            style={{ borderRadius: "10px 10px 0px 0px" }}
            top
            width="100%"
            src="https://picsum.photos/200"
            alt="Card image cap"
          />
          <div class="card" style={bodystyle}>
            <CardSubtitle>company</CardSubtitle>
            <CardText>description</CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default ClassComponent;
