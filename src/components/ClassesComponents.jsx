import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ClassComponent from "./ClassComponent";
class ClassesComponents extends Component {
  render() {
    return (
      <Container fluid style={{ marginTop: "60px" }}>
        <Row>
          {this.props.Classes.map(a => (
            <ClassComponent
              key={a.id}
              _id={a.id}
              classObject={{
                name: a.name,
                teacher_name: a.teacher_name,
                id: a.id
              }}
              _name={a.name}
              _teacher={a.teacher_name}
              objectDelete={this.props.objectDelete}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default ClassesComponents;
