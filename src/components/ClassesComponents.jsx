import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ClassComponent from "./ClassComponent";
class ClassesComponents extends Component {
  state = {
    classes: [
      {
        id: 1,
        name: "Physics",
        Teacher_: "Inkitikhab Ulfat",
        total_students: 24
      },
      {
        id: 2,
        name: "Chemistry",
        Teacher_: "Sir Aziz",
        total_students: 25
      },
      {
        id: 3,
        name: "Math",
        Teacher_: "Faisal",
        total_students: 24
      },
      {
        id: 4,
        name: "Urdu",
        Teacher_: "Ali",
        total_students: 24
      },
      {
        id: 5,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 6,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 7,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 8,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 9,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      }
    ]
  };

  render() {
    return (
      <Container fluid style={{ marginTop: "60px" }}>
        <Row>
          {this.state.classes.map(a => (
            <ClassComponent
              key={a.id}
              _id={a.id}
              _name={a.name}
              _teacher={a.Teacher_}
              _strength={a.total_students}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ClassesComponents;
