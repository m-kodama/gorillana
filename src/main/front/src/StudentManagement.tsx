import * as React from 'react';
import { useContext, useEffect } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { StudentProperties } from './const';
import TableComponent from './TableComponent';
import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const StudentManagement = () => {
    const { state, dispatch } = useContext(Store);

    // TODO この使い方はよろしくないらしい
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