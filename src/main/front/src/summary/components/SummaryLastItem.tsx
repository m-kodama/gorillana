import * as React from 'react';
import SummaryHeader from '../../common/components/SummaryHeader';
import { Paper, ButtonBase } from '@material-ui/core';
import { CategoryType, UnitType } from '../types';
import { Plus } from 'mdi-material-ui';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { color } from '../../const';
import { Store } from '../store';
import { ActionType } from '../reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        width: "100%",
        height: "calc(100% - 2px)",
        minHeight: "106px",
        borderRadius: 8,
        backgroundColor: "#FAFAFA",
        borderStyle:"dashed",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignSelf: "stretch"
    },
    button: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
  })
);



type SummaryItemProps = {
    label: string;
    value: number;
    category: CategoryType;
    unit: UnitType;
};


const SummaryLastItem: React.FC = () => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(Store);

    const handleClick = () => {
      dispatch({
        type: ActionType.DIALOG_OPEN,
        payload: {
          open: true
        }
      })
    }

    return (
        <Paper variant="outlined" className={classes.paper}>
            <ButtonBase className={classes.button} onClick={handleClick}>
                <Plus style={{color: color.baseGrey, marginTop: "3px"}}/>
            </ButtonBase>
        </Paper>
    );
}

export default SummaryLastItem;