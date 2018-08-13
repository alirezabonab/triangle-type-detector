import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TriangleSides from "../TriangleSides";
import TriangleView from "../TriangleView";

const data = {
  equilateral: "A triangle is equilateral when all sides are equal. A = B = C",
  isosceles:
    "A triangle is isosceles when two sides are equal. A = B Or A = C Or B = C",
  scalene:
    "A triangle is scalene when none of sides are equal. A != B and A != C and B != C"
};

const styles = () => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "25vw",
      paddingRight: "25vw",
      width: "100vw",
      height: "100vh"
    },
    description: {
      color: "#009688",
      fontSize: "16pt",
      textAlign: "left",
      marginBottom: "100px"
    }
  };
};

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triangleType: "equilateral",
      side1: 1,
      side2: 1,
      side3: 1
    };
  }

  onSideChange = sideIndex => {
    return value => {
      this.setState(oldState => {
        let newState = {
          ...oldState,
          ["side" + sideIndex]: value
        };

        const { side1, side2, side3 } = newState;
        var triangleType = "";

        if (!side1 || !side2 || !side3) triangleType = "";
        else if (side1 === side2 && side1 === side3 && side1 !== null) {
          triangleType = "equilateral";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
          triangleType = "isosceles";
        } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
          triangleType = "scalene";
        }

        newState.triangleType = triangleType;

        return newState;
      });
    };
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.triangleType && (
          <TriangleView triangleType={this.state.triangleType} />
        )}
        {this.state.triangleType && (
          <span className={classes.description}>
            {data[this.state.triangleType]}{" "}
          </span>
        )}
        <TriangleSides
          side1={this.state.side1}
          side2={this.state.side2}
          side3={this.state.side3}
          onSideChange={this.onSideChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(MainContent);
