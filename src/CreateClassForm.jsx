import React, { Component } from "react";
class CreateClassForm extends Component {
  state = {};
  fetch = () => {
    console.log("fetch");
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("GET", "POST", "OPTIONS");

    headers.append("Authorization");

    fetch("http://localhost:8000/api/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        artist: "Talib",
        album_title: "red",
        genre: "country",
        album_logo: "tall"
      })
    });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="artist"
              value="artist"
              onChange={this.handleChange}
            />
            <input
              className="input"
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
            <input
              className="input"
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
            <input
              className="input"
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              name="emailaddress"
              value={this.state.emailaddress}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input type="submit" value="Submit" className="button is-primary" />
          </div>
        </div>
      </form>
    );
  }
}

export default CreateClassForm;
