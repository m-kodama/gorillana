import * as React from "react";
import { Button } from "@material-ui/core";
import _ from "lodash";

import classnames from 'classnames';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ChevronUp, ChevronDown } from "mdi-material-ui";

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
    unselected: {
      background: "#FFFFFF",
      color: "#333333"
    },
    selected: {
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

type wantedProps = {
  icon?: JSX.Element;
  label: string;
  children?: React.ReactNode;
};

const MenuButton: React.FC<wantedProps> = props => {
  const classes = useStyles();
  const [isSelected, changeSelectedState] = React.useState(false);

  const onClick = () => {
    if (_.isUndefined(props.children)) {
      changeSelectedState(!isSelected);
    } else {
      changeSelectedState(!isSelected);
    }
  };

  const hasSubMenu = () => !_.isUndefined(props.children);

  return (
    <div>
      <button 
        onClick={onClick} 
        className={classnames(classes.button, isSelected ? hasSubMenu() ? classes.selectedSubButton : classes.selected : classes.unselected)}
      >
        <div>{props.icon}</div>
        <div className={classes.buttonText}>{props.label}</div>
        {hasSubMenu() ? isSelected ? <ChevronUp/> : <ChevronDown/> : ""}
      </button>
      {hasSubMenu() && (
        <div className={classes.subMenuGroup}>
          {isSelected && props.children}
        </div>
      )}
    </div>
  );
};

export default MenuButton;
