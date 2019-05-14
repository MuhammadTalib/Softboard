import React, { Component } from "react";
class SideBar extends Component {
  state = {
    isOpen: true
  };
  render() {
    return (
      <div>
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">
            <div class="sidebar-item sidebar-brand">
              <a href="#">pro sidebar</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideBar;
