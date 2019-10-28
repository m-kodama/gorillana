import * as React from 'react';
import { Button } from '@material-ui/core';
import { InsertDriveFileTwoTone, PersonAddTwoTone } from '@material-ui/icons';
import TableComponent from './TableComponent';

const StudentManagement = () => {
    return (
        <div>
            <div style={{textAlign:"center", margin:"15px 0px"}}>
                <Button style={{margin:"5px 5px"}} variant="outlined" color="secondary" startIcon={<PersonAddTwoTone/>}>新規作成</Button>
                <Button style={{margin:"5px 5px"}} variant="outlined" startIcon={<InsertDriveFileTwoTone/>}>CSVから新規作成</Button>
                <TableComponent/>
            </div>
        </div>
    )
}

export default StudentManagement;