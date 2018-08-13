import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Icon from "../../microComponents/Icon";
const styles = () => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "50vw",
      marginTop: "40px",
    },
    icon: {
      alignSelf: "center"
    }
  };
};

class TriangleSides extends Component {
  render() {
    const { classes } = this.props;
    const { triangleType } = this.props;

    return (
      <div className={classes.root}>
        <Icon
          className={classes.icon}
          icon={triangleType}
          width="128px"
          height="128px"
          viewBox="0 0 256 256"
        />

      </div>
    );
  }
}

export default withStyles(styles)(TriangleSides);
