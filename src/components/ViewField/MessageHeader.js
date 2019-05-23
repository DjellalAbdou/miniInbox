import React from "react";
import Avatar from "@material-ui/core/Avatar";
import userImage from "../../assets/boy.jpg";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  avatar: {
    margin: "0 20px 0 0",
    width: 40,
    height: 40
  },
  title: {
    color: "#1A1E2E",
    margin: 0
  },
  icon: {
    color: "#838EAB"
  },
  date: {
    color: "#838EAB"
  }
};

function MessageHeader(props) {
  const { classes } = props;
  return (
    <div className="messageheader">
      <Avatar alt="user pic" src={userImage} className={classes.avatar} />
      <div>
        <p className={classes.title}>{props.user}</p>
        <p className={classes.date}>{props.date}</p>
      </div>
    </div>
  );
}

export default withStyles(styles)(MessageHeader);
