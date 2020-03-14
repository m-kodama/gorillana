import * as React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import { Store } from '../store';
import { ActionType } from '../reducer';
import { color } from '../../const';
import { Close } from 'mdi-material-ui';
import MenuButtonGroup from "../../common/components/MenuButtonGroup";
import MenuButton from "../../common/components/MenuButton";
import {
  FormatListBulleted,
  PlaylistEdit,
} from "mdi-material-ui";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      padding: 0,
    },
   header: {
     display: "flex",
     justifyContent: "flex-start",
     alignItem: "center",
     backgroundColor: color.secondary,
     color: " #FFFFFF",
     padding: "0px 0px 0px 16px",
    },
    headerTitle: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: "100%"
    },
    body: {
      height: 480,
      width: 750,
      display: "flex",
      justifyContent: "flex-start",
      alignItem: "stretch",
      backgroundColor: "#FAFAFA"
    },
    sidebar: {
      width: 225,
      backgroundColor: "#FFFFFF",
      padding: 16,
    },
    content: {
    }
  })
);

type SummarySettingDialogProps = {
    label?: string;
};

const SummarySettingDialog: React.FC<SummarySettingDialogProps> = (props: SummarySettingDialogProps) => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);

    const handleClose = () => {
      dispatch({
        type: ActionType.DIALOG_CLOSE,
        payload: {
          open: false
        }
      })
    }

    return (
        <Dialog PaperProps={{style: {borderRadius: 8}}} maxWidth={false} open={state.open} onClose={handleClose} className={classes.dialog}>
          <div className={classes.header}>
            <div className={classes.headerTitle}><span>サマリーの設定</span></div>
            <IconButton style={{color: "#FFF"}}><Close onClick={handleClose}/></IconButton>
          </div>
          <div className={classes.body}>
            <div className={classes.sidebar}>
              <MenuButtonGroup value="サマリー一覧">
                <MenuButton label="サマリー一覧" icon={<FormatListBulleted />}/>
                <MenuButton label="サマリーの作成/編集" icon={<PlaylistEdit />} />
              </MenuButtonGroup>
            </div>
            <div className={classes.content}></div>
          </div>
        </Dialog>
    );
}

export default SummarySettingDialog;