import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown } from "@material-ui/icons";

const styles = {
  title: {
    color: "#1A1E2E",
    margin: 0
  },
  icon: {
    color: "#838EAB"
  }
};
function MailHeader(props) {
  const { classes } = props;
  return (
    <div className="mailheader">
      <h1 className={classes.title}>{props.title}</h1>
      <KeyboardArrowDown className={classes.icon} />
    </div>
  );
}

export default withStyles(styles)(MailHeader);
