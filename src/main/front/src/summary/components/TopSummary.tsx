import * as React from 'react';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core';
import { Paper, Grid } from '@material-ui/core';
import SummaryHeader from '../../common/components/SummaryHeader';
import SummaryItem from './SummaryItem';
import SummaryLastItem from './SummaryLastItem';
import SummarySettingDialog from './SummarySettingDialog';
import { StoreProvider, Store } from '../store';

const TopSummary: React.FC = () => {
    const { state, dispatch } = React.useContext(Store);
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <StoreProvider>
                <Paper style={{margin:16, height: "calc(100% / 3)"}}>
                    <SummaryHeader canSelectFaculity/>
                    <div style={{padding:"0 16px 16px 16px"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><SummaryItem label="平均学習時間" value={0.4} category="time" unit="minute"/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><SummaryItem label="平均学習者数" value={0} category="people" unit="people"/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><SummaryItem label="平均正解数" value={2.8} category="count" unit="count"/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><SummaryItem label="解答時間" value={0.2} category="time" unit="second"/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}><SummaryLastItem/></Grid>
                        </Grid>
                    </div>
                </Paper>
                <SummarySettingDialog/>
            </StoreProvider>
        </div>
    );
}

export default TopSummary;