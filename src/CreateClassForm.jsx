import React, { useState } from "react";
import axios from "axios";
const CreateClassForm = props => {
  const [name, setname] = useState("");
  const [teacher_name, setteacher_name] = useState("");
  const handlenameChange = e => {
    setname(e.target.value);
  };
  const handleteacher_nameChange = e => {
    setteacher_name(e.target.value);
  };
  const handleSubmit = (name, teacher_name) => {
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

  return (
    <form style={{ marginTop: "80px" }}>
      <label className="label">Name:</label>

      <input
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={handlenameChange}
      />
      <br />

      <label className="label">Teachers Name:</label>
      <input
        className="input"
        type="text"
        name="teacher_name"
        value={teacher_name}
        onChange={handleteacher_nameChange}
      />

      <button
        onClick={() => handleSubmit({ name: "Physics", teacher_name: "Umer" })}
      >
        Submit
      </button>
    </form>
  );
};

export default CreateClassForm;
