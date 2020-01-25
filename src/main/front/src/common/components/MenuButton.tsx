import * as React from "react";
import { Box, Collapse } from "@material-ui/core";
import _ from "lodash";
import { Store } from '../../store'
import classnames from 'classnames';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ChevronRight } from "mdi-material-ui";
import {color} from '../../const';
import { ActionType } from "../../reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "left",
      width: "100%",
      height: 48,
      padding: "0 8px",
      border: 0,
      fontSize: 16,
      borderRadius: 8,
      transition: "padding-left 0.2s ease-out, background-color 0.2s ease-out",
      "&:hover": {
        paddingLeft: 16
      }
    },
    unselected: {
      background: "#FFFFFF",
      color: color.text
    },
    selected: {
      background: "#0F4C81",
      color: "#FFFFFF"
    },
    selectedParentButton: {
      background: "#EEEEEE",
      color: color.text
    },
    buttonText: {
      textAlign: "left",
      fontSize: 16,
      marginLeft: 8
    },
    subMenuGroup: {
      paddingTop: 4,
    },
    icon: {
      color: color.baseGrey,
      transition: "all 0.2s ease-out"
    },
    selectedIcon: {
      color: "#FFFFFF"
    },
    chevron: {
      rotate: "180deg",
      transition: "transform 0.2s ease-out"
    },
    opendSubMenu: {
      transform: `rotate(${90}deg)`
    }
  })
);

export type MenuButtonProps = {
  icon?: JSX.Element;
  label: string;
  selectedLabel?: string;
  children?: React.ReactNode;
  onClick?: (label: string) => void;
};

const MenuButton: React.FC<MenuButtonProps> = props => {
  const classes = useStyles();
  const [isOpened, changeOpenedState] = React.useState(false);
  const { state, dispatch } = React.useContext(Store);

  const onClick = () => {
    if (_.isUndefined(props.children)) {
      if (props.onClick) {
        props.onClick(props.label);
      }
      dispatch({ type: ActionType.CHANGE_MENU_GROUP_VALUE, payload: {...state, menuGroupValue: props.label}});
    } else {
      changeOpenedState(!isOpened);
    }
  };

  const hasSubMenu = () => !_.isUndefined(props.children);

  const isSelected = () => !_.isUndefined(props.selectedLabel) && props.label === props.selectedLabel;

  const children = React.Children.map(props.children, child => {
    if (typeof child !== "object") {
      return null;
    }
    return React.cloneElement(child as React.ReactElement<MenuButtonProps>, {
      selectedLabel: props.selectedLabel ? props.selectedLabel : undefined,
      onClick: props.onClick
    });
  });

  return (
    <div>
      <button
        onClick={onClick}
        className={
          classnames(
            classes.button, 
            isSelected() || isOpened ? hasSubMenu() ? classes.selectedParentButton : classes.selected : classes.unselected
          )
        }
      >
        <Box display="flex">
          <div className={ isSelected() && !hasSubMenu() ? classes.selectedIcon : classes.icon }>{props.icon}</div>
          <div className={classes.buttonText}>{props.label}</div>
        </Box>
        {
          hasSubMenu() ? 
          (<ChevronRight className={classnames(classes.chevron, isOpened ? classes.opendSubMenu : "")}/>) 
          : 
          ("")
        }
      </button>
      {
        hasSubMenu() && (
          <Collapse in={isOpened}>
           <div className={classes.subMenuGroup}>{children}</div>
          </Collapse>
        )
      }
    </div>
  );
};

export default MenuButton;
