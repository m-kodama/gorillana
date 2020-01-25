import * as React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem } from '@material-ui/core';
import moment from 'moment';
import { color } from '../../const';

moment.locale("ja");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginBottom: 16,
    },
    formControl: {
        width: "100%",
    },
    select: {
        height:40,
        borderRadius: 8,
        color: color.text,
        transition: "height .5s ease-in",
    },
    sectionTitle: {
        color: color.baseGrey,
        fontSize: 12,
        fontWeight: "bold",
        padding: "0 8px 8px 8px"
      },
      menuItem: {
          color: color.text
      }
  })
);

const YearSelectDropdown: React.FC = () => {
    const classes = useStyles();
    // 前後3年分の年度データ
    const targetYearRange = [-1, 0, 1].map(y => moment().subtract(y, "year").year());
    const [displayYear, setDisplayYear] = React.useState<string>(moment().year().toString());

    const handleDisplayYear = (event: React.ChangeEvent<{value: unknown}>) => {
        setDisplayYear(event.target.value as string)
    }

    return(
        <div className={classes.root}>
            <div className={classes.sectionTitle}>年度</div>
            <FormControl className={classes.formControl} variant="outlined">
                <Select className={classes.select} value={displayYear} onChange={handleDisplayYear}>
                    {
                        targetYearRange.map(year => <MenuItem className={classes.menuItem} value={year.toString()}>{year.toString()}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    )

}

export default YearSelectDropdown;
