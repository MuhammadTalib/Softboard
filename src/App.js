import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import CreateClassForm from "./CreateClassForm";
import ClassesComponents from "./components/ClassesComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Classes: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/")
      .then(res => {
        this.setState({ Classes: res.data.classes });
        console.log(this.state.Classes);
      })
      .catch(err => console.log(err));
  };

  handleSubmit = (name, teacher_name) => {
    console.log("submit");
    axios
      .post("http://localhost:8000/api/", {
        id: this.state.classes.length,
        name: name,
        teacher_name: teacher_name
      })
      .then(res => this.refreshList())
      .catch(err => console.log(err));
  };
  handleDelete = id => {
    axios
      .get(`http://localhost:8000/${id}/delete`)
      .then(res => this.refreshList());
  };
  handleForm = () => {
    console.log("aasfdsg");
    return <Link to="/addClass" />;
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <ClassesComponents
                Classes={this.state.Classes}
                objectDelete={this.handleDelete}
              />
            )}
          />
          <Route
            exact
            path="/addClass"
            render={props => <CreateClassForm saveClass={this.handleSubmit} />}
          />
        </Switch>
        <Navbar handleForm={this.handleForm} />
      </React.Fragment>
    );
  }
}
export default App;
