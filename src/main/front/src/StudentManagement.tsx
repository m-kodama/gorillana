import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { StudentProperties, defaultStudent } from './const';
import { Button } from '@material-ui/core';
import { InsertDriveFileTwoTone, PersonAddTwoTone } from '@material-ui/icons';
import TableComponent from './TableComponent';
import InputDialog from './InputDialog';
import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const StudentManagement = () => {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        getStudents();
    },[]);

    const getStudents = async () => {
        await axios.get<StudentProperties[]>("http://localhost:8080/api/students").then(response => {
            dispatch({
                type: ActionType.STUDENT_UPDATE,
                payload: {
                    ...state,
                    students: response.data
                }
            })
        });
    };

    return (
        <div>
            <TableComponent>{state.students}</TableComponent>
        </div>
    )
}

export default StudentManagement;