import React, { Component } from "react";
import NewMailButton from "./NewMailButton";
import Categories from "./Categories";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <NewMailButton openDrawer={this.toggleDrawer} />
        <Categories />
      </div>
    );
  }
}

export default SideBar;
