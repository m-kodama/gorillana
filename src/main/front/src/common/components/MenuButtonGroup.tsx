import * as React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { MenuButtonProps } from './MenuButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionTitle: {
      color: "#84898C",
      fontSize: 12,
      fontWeight: "bold",
      padding: "0 8px 4px 8px"
    },
    menuButton: {
      marginBottom: 4
    }
  })
);

type MenuButtonGroupProps = {
  title: String;
  value: string;
  children?: React.ReactNode;
};

const MenuButtonGroup: React.FC<MenuButtonGroupProps> = props => {
  const classes = useStyles();
  const [buttonState, changeButtonState] = React.useState<string>("HOME");
  
  const onClickButton = (label: string) => {
    changeButtonState(label);
  };

  const children = React.Children.map(props.children, child => {
    if (typeof child !== "object") {
      return null;
    }
    return React.cloneElement(child as React.ReactElement<MenuButtonProps>, {
      selectedLabel: buttonState,
      onClick: onClickButton
    });
  })

  return (
    <div>
      <div className={classes.sectionTitle}>メニュー</div>
      {
        children.map(child => {
          return (
              child ? <div className={classes.menuButton} key={child.props.label}>{child}</div> : ""
          );
        })
      }
    </div>
  );
};

export default MenuButtonGroup;