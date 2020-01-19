import * as React from "react";
import { Button } from "@material-ui/core";
import _ from "lodash";
<<<<<<< HEAD
import { ChevronDown, ChevronUp } from 'mdi-material-ui';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    background: "#0F4C81",
    textAlign: "left",
    width: 200,
    color: "#FFF",
  },
}));
=======

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "flex",
      textAlign: "left",
      width: "100%",
      height: "48px",
      padding: "0 8px",
      border: "0px",
      fontSize: 16,
      borderRadius: "8px"
    },
    unselectedButton: {
      background: "#FFFFFF",
      color: "#333333"
    },
    selectedButton: {
      background: "#0F4C81",
      color: "#FFFFFF"
    },
    selectedSubButton: {
      background: "#EEEEEE",
      color: "#333333"
    },
    buttonText: {
      textAlign: "left",
      fontSize: 16
    },
    subMenuGroup: {
      padding: "0 0 0 16px"
    }
  })
);
>>>>>>> b59177541d855db8a2b21f0ed2b9c397216a6ac1

type wantedProps = {
  icon?: JSX.Element;
  label: string;
  children?: React.ReactNode;
};

const MenuButton: React.FC<wantedProps> = props => {
  const classes = useStyles();
<<<<<<< HEAD
  const [showChildren, changeState] = React.useState(false);
=======
  const [isSelected, changeSelectedState] = React.useState(false);
>>>>>>> b59177541d855db8a2b21f0ed2b9c397216a6ac1

  const onClick = () => {
    if (_.isUndefined(props.children)) {
      changeSelectedState(!isSelected);
    } else {
<<<<<<< HEAD
      changeState(!showChildren);
=======
      changeSelectedState(!isSelected);
>>>>>>> b59177541d855db8a2b21f0ed2b9c397216a6ac1
    }
  };

  const hasSubMenu = () => !_.isUndefined(props.children);

  const hasChildren = !_.isUndefined(props.children);
  return (
    <div>
<<<<<<< HEAD
      <Button onClick={onClick} className={classes.button} variant="outlined" startIcon={props.icon} endIcon={ hasChildren ? showChildren ? <ChevronUp/> : <ChevronDown/> : ""}>
        {/* <Typography align="left">{props.label}</Typography> */}{props.label}
      </Button>
      { hasChildren && (
        <div>{showChildren && props.children}</div>
=======
      {/* <Button onClick={onClick} className={classes.button} variant="outlined">
        {props.label}
      </Button> */}
      <button
        onClick={onClick}
        className={
          classes.button +
          " " +
          (isSelected
            ? hasSubMenu()
              ? classes.selectedSubButton
              : classes.selectedButton
            : classes.unselectedButton)
        }
      >
        <div>Icon</div>
        <div className={classes.buttonText}>{props.label}</div>
        {hasSubMenu() && <div>Icon</div>}
      </button>
      {hasSubMenu() && (
        <div className={classes.subMenuGroup}>
          {isSelected && props.children}
        </div>
>>>>>>> b59177541d855db8a2b21f0ed2b9c397216a6ac1
      )}
    </div>
  );
};

export default MenuButton;
