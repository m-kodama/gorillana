import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {color} from '../../const';
import logo from '../../static/images/logo.png';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      padding: "8px 0 16px 0",
    },
    icon: {
      width: 40,
      height: 40
    },
    text: {
      fontSize: 24,
      fontWeight: 900,
      color: color.primary,
      margin: "0 8px",
    }
  })
);

export type LogoProps = {
  hideIcon?: boolean;
  hideText?: boolean;
};

const Logo: React.FC<LogoProps> = props => {
  const classes = useStyles();
  return (
    <Box
      className={classes.box}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {props.hideIcon ? "" : <img className={classes.icon} src={logo} />}
      {props.hideText ? "" : <div className={classes.text}>gorillana</div>}
    </Box>
  );
};

export default Logo;