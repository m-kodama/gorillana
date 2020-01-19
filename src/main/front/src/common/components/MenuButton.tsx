import * as React from 'react';
import { Button } from '@material-ui/core';
import _ from "lodash";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    background: "#FF5252",
    textAlign: "left",
    width: "500px",
    color: "#FFF",
  },
}));

type wantedProps = {
  icon?: string;
  label: string;
  children?: React.ReactNode;
}

const MenuButton: React.FC<wantedProps> = (props) => {
  const classes = useStyles();
  const [showChildren, changeShowState] = React.useState(false);

  const onClick = () => {
    if(_.isUndefined(props.children)) {
      alert("fuck");
    } else {
      changeShowState(!showChildren);
    }
  }

  return (
    <div>
      <Button  onClick={onClick} className={classes.button} variant="outlined">
        {props.label}
      </Button>
      {!_.isUndefined(props.children) && (
        <div>{showChildren && props.children}</div>
      )}
    </div>
  );
};

export default MenuButton;