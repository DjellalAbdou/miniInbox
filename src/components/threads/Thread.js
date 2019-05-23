import React, { Component } from "react";
import { connect } from "react-redux";
import { Lens } from "@material-ui/icons";

class Thread extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      seen: false
    };
  }

  render() {
    const mycss = !this.props.selected
      ? "threadmessage"
      : "threadmessage selectedThreadMessage";
    const vu = !this.props.thread.vu ? <Lens className="vuicon" /> : null;
    return (
      <div
        className={mycss}
        onClick={() => {
          if (!this.props.selected) {
            this.props.changeSelection(this.props.id);
            this.props.onSelectingThread();
          }
        }}
      >
        <div className="threadtitle-vu">
          <h3>{this.props.title}</h3>
          {vu}
        </div>

        <div className="useranddate">
          <p>{this.props.creator}</p>
          <p>{this.props.date}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectingThread: () => {
      dispatch({ type: "CHANGE_SELECTED_THREAD", payload: ownProps.thread });
      console.log(ownProps.thread);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Thread);
