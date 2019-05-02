import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
      }
    ]
  };

  render() {
    return (
      <Container fluid>
        {/* <div>
        {this.state.classes.map(a => (
          <ClassComponent
            key={a.id}
            _id={a.id}
            _name={a.name}
            _teacher={a.Teacher_}
            _strength={a.total_students}
          />
        ))}
      </div> */}
        <Row>
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
          <ClassComponent />
        </Row>
      </Container>
    );
  }
}

export default ClassesComponents;
