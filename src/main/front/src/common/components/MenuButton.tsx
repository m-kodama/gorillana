import * as React from 'react';
import { Button } from '@material-ui/core';
import _ from "lodash";
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

type wantedProps = {
  icon?: JSX.Element;
  label: string;
  children?: React.ReactNode;
}

const MenuButton: React.FC<wantedProps> = (props) => {
  const classes = useStyles();
  const [showChildren, changeState] = React.useState(false);

  const onClick = () => {
    if(_.isUndefined(props.children)) {
      alert("fuck");
    } else {
      changeState(!showChildren);
    }
  }

  const hasChildren = !_.isUndefined(props.children);
  return (
    <div>
      <Button onClick={onClick} className={classes.button} variant="outlined" startIcon={props.icon} endIcon={ hasChildren ? showChildren ? <ChevronUp/> : <ChevronDown/> : ""}>
        {/* <Typography align="left">{props.label}</Typography> */}{props.label}
      </Button>
      { hasChildren && (
        <div>{showChildren && props.children}</div>
      )}
    </div>
  );
};

export default MenuButton;