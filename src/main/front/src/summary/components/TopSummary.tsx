import * as React from 'react';
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core';
import SummaryBase from '../../common/components/SummaryBase';

const TopSummary: React.FC = () => {
    return (
        <div style={{margin:16}}>
            <SummaryBase canSelectPeriod canSelectFaculity/>
        </div>
    );
}

export default TopSummary;