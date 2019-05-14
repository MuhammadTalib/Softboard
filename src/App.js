import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [0, 1]
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };
  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          complete
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
        </span>
      </div>
    );
  };
  renderItems = () => {
    const { viewCompleted, todoList } = this.state;
    const newItems = [];
    //todoList.filter(item => item.completed === viewCompleted);
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            {" "}
            Edit{" "}
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>
        </span>
      </li>
    ));
  };
  handleSubmit = item => {
    console.log("submit");
    axios
      .post("http://localhost:8000/api/", {
        id: 13,
        name: "Chemistry",
        teacher_name: "Sir Aziz"
      })
      .then(res => this.refreshList());
  };
  handleDelete = item => {
    axios.delete(`http://localhost:8000/api/`).then(res => this.refreshList());
  };
  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>send</button>
        <button
          onClick={() =>
            this.handleDelete({
              id: 2,
              name: "Talib",
              teacher_name: "1233YBSCFS"
            })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}
export default App;
