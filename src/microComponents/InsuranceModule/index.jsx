import React, { Component } from "react";
import Icon from "../Icon";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
  return {
    root: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      width: "12.5vw",
      borderWidth: "0 0 4px 0;",
      borderStyle: "solid",
      borderColor: "#bcbcbc",
      
      "&:hover": {
         "& > svg" : {
          filter: "grayscale(0%)",
         },

         background:"#eee"
       
      }
    },
    selectedRoot : {
       borderColor: "#66BB6A",
       
    },
    icon: {
      filter: "grayscale(100%)",
     
    },
    selectedIcon: {
      
    },
    title: {
      color: "#455A64"
    }
  };
};

class InsuranceModuleIcon extends Component {
  render() {
    const { classes } = this.props;
    const {
      isSelected = false,
      icon = "jewelry",
      title = ""
    } = this.props;

    return (
      <div className={[classes.root , (isSelected ? classes.selectedRoot : '')].join(' ')}>
        <Icon
          className={isSelected ? classes.selectedIcon : classes.icon}
          icon={icon}
          width="100%"
          height="100%"
          viewBox="0 0 256 256"
        />
        <span className={classes.title}>{title}</span>
       {/*  <span className={classes.desc}>{desc}</span> */}
      </div>
    );
  }
}

export default withStyles(styles)(InsuranceModuleIcon);
