import React, { Component } from "react";
import { Inbox } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import MailHeader from "./MailHeader";
import MailContent from "./MailContent";
import Drawer from "@material-ui/core/Drawer";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { AttachFile, Edit, Close } from "@material-ui/icons";

const styles = {
  iconglobal: {
    fontSize: 150
  },
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
  },
  close: {
    color: "#ffffff",
    cursor: "pointer",
    padding: "0 20px"
  }
};
class ThreadVieawer extends Component {
  constructor() {
    super();
    this.state = {
      isDrawerOpen: false,
      subject: "",
      recipient: "",
      message: ""
    };
  }
  toggleDrawer = open => {
    this.setState({ isDrawerOpen: open });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddThread = () => {
    fetch(
      `https://virtserver.swaggerhub.com/dzconseil/challenge/1.0.0/threads/`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: {
          subject: this.state.subject,
          recipient: this.state.recipient,
          message: this.state.message
        }
      }
    )
      .then(response => response.json())
      .then(response => {
        let newthreads = [...this.props.allthreads];
        response.selected = false;
        response.vu = false;
        newthreads.push(response);
        this.props.onAddThread(newthreads);
        this.setState({ subject: "", recipient: "", message: "" });
        this.props.onCloseDrawer();
      });
  };

  render() {
    const { classes } = this.props;
    let drawer = (
      <Drawer
        anchor="right"
        open={this.props.isDrawerOpen}
        onClose={this.props.onCloseDrawer}
      >
        <div>
          <div className="newThreadHeader">
            <p>create new thread </p>
            <Close
              classes={{ root: classes.close }}
              onClick={this.props.onCloseDrawer}
            />
          </div>
          <div className="newthreadform">
            <form noValidate>
              <TextField
                className="messagefield"
                id="outlined-name"
                multiline
                fullWidth
                name="subject"
                label="subject"
                value={this.state.subject}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                multiline
                fullWidth
                name="recipient"
                label="recipient"
                value={this.state.recipient}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                multiline
                fullWidth
                label="message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                rows={10}
              />
            </form>
            <div className="attachandreplay">
              <Button
                variant="outlined"
                classes={{ label: classes.buttonLabel }}
              >
                <AttachFile classes={{ root: classes.icon }} /> Attach files
              </Button>
              <Button
                onClick={this.handleAddThread}
                classes={{ root: classes.reply, label: classes.buttonLabel }}
              >
                <Edit classes={{ root: classes.icon }} /> send
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    );
    if (this.props.msgselected === false) {
      return (
        <div className="plsselectthread">
          <div>
            <Inbox classes={{ root: classes.iconglobal }} />
            <div> please select a thread to view it </div>
            {drawer}
          </div>
        </div>
      );
    }
    return (
      <div className="threadVieawer">
        <MailHeader title={this.props.thread.subject} />
        <MailContent thread={this.props.thread} />
        {drawer}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allthreads: state.allThreads,
    isDrawerOpen: state.isDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseDrawer: () => {
      dispatch({ type: "CLOSE_DRAWER" });
    },
    onAddThread: allthreads => {
      dispatch({ type: "ADD_THREAD", payload: allthreads });
    }
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ThreadVieawer)
);
