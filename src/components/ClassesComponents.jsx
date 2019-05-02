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
      },
      {
        id: 10,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 11,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 12,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 13,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 14,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 15,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 16,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 17,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 18,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 19,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 20,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 21,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 22,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 23,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 24,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 25,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 26,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 27,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 28,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 29,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 30,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 31,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 32,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 33,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 34,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 35,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 36,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      },
      {
        id: 37,
        name: "ICS",
        Teacher_: "Maryam Feroze",
        total_students: 24
      },
      {
        id: 38,
        name: "TOCS",
        Teacher_: "Humera Bashir",
        total_students: 24
      }
    ]
  };

  render() {
    return (
      <Container fluid>
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
