import React from "react";
import Button from "@material-ui/core/Button";
import { Edit } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = theme => ({
  button: {
    backgroundColor: "#4D5AFF",
    color: "#ffffff"
  },
  buttonLabel: {
    textTransform: "capitalize",
    fontSize: 16
  },
  icon: {
    fontSize: 20,
    paddingRight: 12
  }
});

function NewMailButton(props) {
  const { classes } = props;
  return (
    <div className="newmailContainer">
      <Button
        onClick={props.onOpeningDrawer}
        variant="contained"
        classes={{ root: classes.button, label: classes.buttonLabel }}
      >
        <Edit classes={{ root: classes.icon }} />
        New mail
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isDrawerOpen: state.isDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpeningDrawer: () => {
      dispatch({ type: "OPEN_DRAWER" });
    }
  };
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewMailButton)
);
