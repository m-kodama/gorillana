import * as React from 'react';
import { makeStyles, withStyles, createStyles, Theme, IconButton } from '@material-ui/core';
import {
  Paper,
  Divider
} from '@material-ui/core';
import {
  ToggleButtonGroup,
  ToggleButton
} from '@material-ui/lab'
import {
  Settings,
  CalendarMonth,
  CalendarWeek,
  CalendarToday
} from 'mdi-material-ui';
import _ from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 16,
      // TODO これ以外にやり方はないものか
      width: "calc(100% - 256px)"
    },
    paper: {
      padding: 16,
    },
    paper_header: {
      height: 40,
      display: "flex",
      alignItems: "center" ,
      justifyContent: "space-between",
      paddingRight: 16
    },
    icon: {
      color: "#84898C",
      fontSize: 20
    },
    toggle_item: {
      fontSize: 12,
      height: "auto"
    },
    divider: {
      alignSelf: 'stretch',
      height: 'auto',
      margin: theme.spacing(1, 0.5),
    },
  })
);

const StyledToggleButtonGroup = withStyles((theme: Theme) => ({
  grouped: {
    width: 45,
    margin: 5,//theme.spacing(0.5),
    height: "auto",
    border: "none",
    padding: 5,//theme.spacing(0.5),
    fontSize:12,
    '&:not(:first-child)': {
      borderRadius: 2//theme.shape.borderRadius
    },
    '&:first-child': {
      borderRadius: 2//theme.shape.borderRadius
    },
  }
}))(ToggleButtonGroup);

const timeRange = ["月別", "週別", "日別"];
// TODO 将来的には学部マスタから導出するべき
const selectableFaculity = ["文", "経", "工1", "理", "工2", "工3", "医"];

type propsType = {
  // 期間が選択可能か
  canSelectPeriod?: boolean;
  // 学部が選択可能か
  canSelectFaculity?: boolean;
}

const SummaryBase: React.FC<propsType> = (props: propsType) => {
  const classes = useStyles();
  const [range, setRange] = React.useState("月別");
  const [faculity, setFaculity] = React.useState(["文"])
  const handleRange = (event: React.MouseEvent<HTMLElement>, newRange: string) => {
    if(!_.isNil(newRange)) {
      // 必ず１つは選択状態にさせておく
      setRange(newRange);
    }
  }
  const handleFaculity = (event: React.MouseEvent<HTMLElement>, newFaculity: string[]) => {
    if(!_.isEmpty(newFaculity)) {
      // 必ず１つは選択状態にさせておく
      setFaculity(newFaculity);
    }
  }

    return (
        <Paper className={classes.paper}>
          <div className={classes.paper_header}>
            <Paper style={{display:"flex"}}>
              {
                props.canSelectPeriod && (
                  <StyledToggleButtonGroup value={range} onChange={handleRange} size="small" exclusive>
                    { timeRange.map(range => <ToggleButton value={range} className={classes.toggle_item}>{range}</ToggleButton>) }
                  </StyledToggleButtonGroup>
                )
              }
              {
                (props.canSelectPeriod && props.canSelectFaculity) && <Divider className={classes.divider} orientation="vertical"/>
              }
              {
                props.canSelectFaculity && (
                  <StyledToggleButtonGroup value={faculity} onChange={handleFaculity} size="small">
                    { selectableFaculity.map(faculity => <ToggleButton value={faculity} className={classes.toggle_item}>{faculity}</ToggleButton>) }
                  </StyledToggleButtonGroup>
                )
              }
            </Paper>
            <IconButton><Settings className={classes.icon}/></IconButton>
          </div>
          <div style={{display:"flex", margin:15, flexWrap:"wrap"}}>
          </div>
        </Paper>
    );
};

export default SummaryBase;