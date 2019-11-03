import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { StudentProperties } from './const';
import { Button } from '@material-ui/core';
import { InsertDriveFileTwoTone, PersonAddTwoTone } from '@material-ui/icons';
import TableComponent from './TableComponent';
import InputDialog from './InputDialog';
import axios from 'axios';


axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


const StudentManagement = () => {
    const { state, dispatch } = useContext(Store);
    const [students, setStudents] = useState<StudentProperties[]>([]);

    useEffect(() => {
        getStudents();
    },[]);

    const getStudents = async () => {
        await axios.get("http://localhost:8080/api/students").then((result) => setStudents(result.data)); 
    }

    return (
        <div>
            <div style={{textAlign:"center", margin:"15px 0px"}}>
                <Button style={{margin:"5px 5px"}} variant="outlined" color="secondary" startIcon={<PersonAddTwoTone/>} onClick={() => dispatch({type: ActionType.DIALOG_OPEN})}>新規作成</Button>
                <Button style={{margin:"5px 5px"}} variant="outlined" startIcon={<InsertDriveFileTwoTone/>}>CSVから新規作成</Button>
                <InputDialog/>
                <TableComponent>{students}</TableComponent>
            </div>
        </div>
    )
}

export default StudentManagement;