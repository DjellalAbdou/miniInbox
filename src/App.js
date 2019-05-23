import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import ListThreadComp from "./components/threads/ListThreadComp";
import ThreadVieawer from "./components/ViewField/ThreadVieawer";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <ListThreadComp />
        <ThreadVieawer
          msgselected={this.props.msgselected}
          thread={this.props.selectedThread}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msgselected: state.isAThreadSelected,
    selectedThread: state.thread
  };
};

export default connect(mapStateToProps)(App);
