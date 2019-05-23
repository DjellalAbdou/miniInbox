import React, { Component } from "react";
import Thread from "./Thread";
import { connect } from "react-redux";

class ListThreadComp extends Component {
  componentDidMount() {
    fetch("https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads")
      .then(response => response.json())
      .then(response => {
        let newresp = response.map(res => {
          res.selected = false;
          res.vu = false;
          return res;
        });
        console.log(newresp);
        this.props.onGetThreads(newresp);
      });
  }

  changeSelectedThread = id => {
    const newthreads = this.props.allThreads.map(thread => {
      if (thread.id === id) thread.selected = true;
      else thread.selected = false;
      return thread;
    });
    this.props.onChangeSelectedThread(newthreads);
  };

  render() {
    const mythreads = this.props.allThreads.map(thread => {
      console.log(thread);
      var date = new Date(thread.time).toDateString("yyyy-MM-dd");
      return (
        <Thread
          thread={thread}
          key={thread.id}
          title={thread.subject}
          id={thread.id}
          creator={thread.creator.username}
          date={date}
          selected={thread.selected}
          changeSelection={this.changeSelectedThread}
        />
      );
    });
    return <div className="listThreads">{mythreads}</div>;
  }
}
const mapStateToProps = state => {
  return {
    allThreads: state.allThreads
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetThreads: threads => {
      dispatch({ type: "GET_THREADS", payload: threads });
    },
    onChangeSelectedThread: newthreads => {
      dispatch({ type: "CHANGE_THREAD", payload: newthreads });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListThreadComp);
