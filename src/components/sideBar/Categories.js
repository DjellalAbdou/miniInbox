import React, { Component } from "react";
import { OfflineBolt, Send, Favorite, Drafts } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bolt: {
    padding: "0 30px",
    color: " #FECB2F",
    fontSize: 16
  },
  send: {
    padding: "0 30px",
    color: "#F86A40",
    fontSize: 16
  },
  favorite: {
    padding: "0 30px",
    color: "#FA3758",
    fontSize: 16
  },
  drafts: {
    padding: "0 30px",
    color: "#535FFC",
    fontSize: 16
  }
};
class Categories extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ul className="sidebarul">
          <li className="bolt">
            <OfflineBolt classes={{ root: classes.bolt }} /> <span>Inbox</span>
          </li>
          <li>
            <Send classes={{ root: classes.send }} /> Sent mail
          </li>
          <li>
            <Favorite classes={{ root: classes.favorite }} /> Favs
          </li>
          <li>
            <Drafts classes={{ root: classes.drafts }} /> Drafts
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Categories);
