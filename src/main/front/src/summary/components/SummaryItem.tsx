import * as React from 'react';
import SummaryHeader from '../../common/components/SummaryHeader';
import { Paper } from '@material-ui/core';
import { CategoryType, UnitType } from '../types';
import { AccountMultiple, Counter, Timer } from 'mdi-material-ui';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { color } from '../../const';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    summary_title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    category: {
        color: color.baseGrey,
        marginRight: '8px',
    },
    summary_label: {
        fontWeight: 500,
    },
    summary_value: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        color: color.accent,
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: 900,
        marginLeft: '8px',
    },
    unit_label: {
        fontSize: '1rem',
        fontWeight: 500,
        marginLeft: '8px',
    },
  })
);



type SummaryItemProps = {
    label: string;
    value: number;
    category: CategoryType;
    unit: UnitType;
};

const icon: Record<CategoryType, JSX.Element> = {
    "time": <Timer/>,
    "count": <Counter/>,
    "people": <AccountMultiple/>
};

const unitLabel: Record<UnitType, string> = {
    "hour": "時間",
    "minute": "分",
    "second": "秒",
    "count": "回",
    "people": "人",
}

const SummaryItem: React.FC<SummaryItemProps> = (props: SummaryItemProps) => {
    const classes = useStyles();
    return (
        <Paper variant="outlined" style={{padding: 16, borderRadius: 8}}>
            <div className={classes.summary_title}>
                <div className={classes.category}>{icon[props.category]}</div>
                <div className={classes.summary_label}>{props.label}</div>
            </div>
            <div className={classes.summary_value}>
                <div className={classes.value}>{props.value}</div>
                <div className={classes.unit_label}>{unitLabel[props.unit]}</div>
            </div>
        </Paper>
    );
}

export default SummaryItem;