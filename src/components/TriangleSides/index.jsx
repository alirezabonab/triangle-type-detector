import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Input from "../../microComponents/Input";
const styles = () => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "50vw"
    },
    inputSide: {}
  };
};

class TriangleSides extends Component {
  render() {
    const { classes } = this.props;
    const { onSideChange } = this.props;
    return (
      <div className={classes.root}>
        <Input
          value={this.props.side1}
          onChange={onSideChange(1)}
          
          className={classes.inputSide}
          type="number"
          min={1}
          max={100}
          label={"select side1 from 1 to 100"}
        />
        <Input
          value={this.props.side2}
          onChange={onSideChange(2)}
          
          className={classes.inputSide}
          type="number"
          min={1}
          max={100}
          label={"select side2 from 1 to 100"}
        />
        <Input
          value={this.props.side3}
          onChange={onSideChange(3)}
          
          className={classes.inputSide}
          type="number"
          min={1}
          max={100}
          label={"select side3 from 1 to 100"}
        />
      </div>
    );
  }
}

export default withStyles(styles)(TriangleSides);
