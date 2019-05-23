import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AttachFile, Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = {
  reply: {
    backgroundColor: "#4D5AFF",
    color: "#ffffff",
    marginLeft: 30
  },
  attachfil: {
    backgroundColor: "#4D5AFF",
    color: "#ffffff"
  },
  icon: {
    fontSize: 16,
    padding: "0 10px 0 0"
  },
  buttonLabel: {
    textTransform: "none",
    fontSize: 16
  }
};
class NewMessage extends Component {
  constructor() {
    super();
    this.state = {
      mymessage: ""
    };
  }

  handleChange = event => {
    this.setState({
      mymessage: event.target.value
    });
  };

  handleAddingMsg = uuid => {
    fetch(
      `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/${uuid}`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          message: this.state.mymessage,
          creator: "admin@dzconseil.com"
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        this.props.onSendingMessage(this.props.selectedThread, response);
        this.setState({ mymessage: "" });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form noValidate>
          <TextField
            className="messagefield"
            id="outlined-name"
            multiline
            fullWidth
            label="reply"
            value={this.state.mymessage}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
            rows={6}
          />
        </form>
        <div className="attachandreplay">
          <Button variant="outlined" classes={{ label: classes.buttonLabel }}>
            <AttachFile classes={{ root: classes.icon }} /> Attach files
          </Button>
          <Button
            onClick={() => {
              this.handleAddingMsg(this.props.selectedThread.id);
            }}
            classes={{ root: classes.reply, label: classes.buttonLabel }}
          >
            <Edit classes={{ root: classes.icon }} /> Reply
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedThread: state.thread
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendingMessage: (thread, newmsg) => {
      let nethread = { ...thread };

      nethread.messages.push(newmsg);
      dispatch({ type: "ADD_MESSAGE_TO_THREAD", payload: nethread });
    }
  };
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewMessage)
);
