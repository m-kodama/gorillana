import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {color} from '../../const';
import avatar from "../../static/images/avatar_sample.png";
import {
  Logout
} from "mdi-material-ui";
import { Paper, Avatar, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginBottom: 16,
      padding: "16px 16px 24px 16px"
    },
    avatar: {
      marginBottom: 8
    },
    userName: {
      marginBottom: 2,
      fontWeight: 700,
      color: color.text
    },
    mail: {
      marginBottom: 10,
      color: color.baseGrey,
      fontSize: 14
    },
    button: {
      borderRadius: 20,
      fontWeight: 400,
      color: color.text,
      backgroundColor: "#EEEEEE",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none"
      }
    }
  })
);

export type LogoProps = {
  avator?: string;
  userName: string;
  mail?: string;
};

const UserCard: React.FC<LogoProps> = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={2}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar className={classes.avatar} alt="アバター画像" src={avatar} />
        <div className={classes.userName}>{props.userName}</div>
        <div className={classes.mail}>{props.mail ? props.mail : ""}</div>
        <Button
          className={classes.button}
          variant="contained"
          fullWidth
          startIcon={<Logout />}
          size="small"
        >
          ログアウト
        </Button>
      </Box>
    </Paper>
  );
};

export default UserCard;