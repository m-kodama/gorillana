import * as React from 'react';
import { Tabs, Tab, Grid, Tooltip } from '@material-ui/core'
import { InsertChartTwoTone, SupervisedUserCircleTwoTone, TodayTwoTone, SettingsApplicationsTwoTone } from '@material-ui/icons';
import StudentManagement from './StudentManagement';
import { Gorillana } from './messageResource';

const tooltipEntryDelay = 200;

const TabComponent: React.FC = () => {
    const [tabId, changeTabId] = React.useState(0);
    const handleTabs = (event: React.ChangeEvent<{}>, newTabId: number) => {
        changeTabId(newTabId);
    }
    return(
        <div style={{borderRight: "1px solid #E0E0E0"}} >
            <Grid container>
                <Grid style={{minHeight: "100vh", borderRight: "1px solid #E0E0E0"}} item>
                <Tabs orientation="vertical" value={tabId} onChange={handleTabs}>
                    // TODO アイコンの横にラベルを出したいけど、Material-UIのcssに手を入れる必要があるので一旦放置
                    <Tooltip title={Gorillana.TAB_MENU.ANALYZE_STUDENT} enterDelay={tooltipEntryDelay}><Tab icon={<InsertChartTwoTone/>}/></Tooltip>
                    <Tooltip title={Gorillana.TAB_MENU.MANAGE_STUDENT} enterDelay={tooltipEntryDelay}><Tab icon={<SupervisedUserCircleTwoTone/>}/></Tooltip>
                    <Tooltip title={Gorillana.TAB_MENU.MANAGE_SCHEDULE} enterDelay={tooltipEntryDelay}><Tab icon={<TodayTwoTone/>}/></Tooltip>
                    <Tooltip title={Gorillana.TAB_MENU.CHANGE_SETTING} enterDelay={tooltipEntryDelay}><Tab icon={<SettingsApplicationsTwoTone/>}/></Tooltip>
                </Tabs>
                </Grid>
                <Grid style={{minHeight: "100vh", backgroundColor:"#FAFAFA"}} item xs>
            {
                tabId === 1 && <StudentManagement/>
            }
            </Grid></Grid>
        </div>

    );
}

export default TabComponent;