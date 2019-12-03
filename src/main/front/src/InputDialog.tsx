import * as React from 'react';
import { useState, useContext } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { 
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, InputAdornment, FormControl,
    InputLabel, MenuItem, Select 
} from '@material-ui/core';
import { StudentProperties, defaultStudent } from './const';
import { Alphabetical, Numeric } from 'mdi-material-ui'
import _ from 'lodash';
import axios from 'axios';
import { Gorillana } from './messageResource';
import moment from 'moment';

type StudentProps = {
    children: StudentProperties
};


const InputDialog: React.FC<StudentProps> = (props: StudentProps) => {
    const targetYearRange = [moment().subtract(1, 'year').year(), moment().year(), moment().add(1, 'year').year()];
    const { state, dispatch } = useContext(Store);
    const [editTargetStudent, setTargetStudent] = useState<StudentProperties>(props.children);

    const dialogMode = (props.children.studentId > 0) ? Gorillana.STUDENT.EDIT : Gorillana.STUDENT.CREATE;

    const handleTargetStudent = (event: React.ChangeEvent<{value: unknown}>, property: keyof StudentProperties) => {
        // 念のためコピーに対して更新を実施した後でstateに反映
        const updateTargetStudent = _.clone(editTargetStudent);
        switch(property) {
            case "studentNumber": 
            case "firstName":
            case "lastName":
            case "entranceYear":
                updateTargetStudent[property] = event.target.value as string;
                break;
            case "faculityId":
            case "classId":
                updateTargetStudent[property] = event.target.value as number ;
                break;
            default: 
                new Error(`${Gorillana.ERROR.UNEXPECTED}`);
                break;
        }
        setTargetStudent(updateTargetStudent);
    }

    const postStudent = async () => {
        await axios.post<StudentProperties[]>("http://localhost:8080/api/students", editTargetStudent).then((response) => {
            dispatch({
                type: ActionType.STUDENT_UPDATE, 
                payload: {...state, students: _.concat(state.students, response.data)}
            });
        });
    }

    const putStudent = async () => {
        const targetStudentId = editTargetStudent.studentId;
        await axios.put<StudentProperties[]>(`http://localhost:8080/api/students/${targetStudentId}`, editTargetStudent).then((response) => {
            if(_.isEmpty(response.data)) {
                // TODO 本来であれば変更後の学生情報だけ飛んでくるはず...
                axios.get<StudentProperties[]>('http://localhost:8080/api/students').then((res) => {
                    dispatch({
                        type: ActionType.STUDENT_UPDATE,
                        payload: {...state, students: res.data}
                    })
                })
            }
        });
    };
    
    return (
        <div>
            <Dialog open={true}>
                <DialogTitle>{dialogMode}</DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{width:400, padding:10}}>
                        <TextField disabled={true} value={dialogMode === Gorillana.STUDENT.EDIT ? props.children.studentId : ""} placeholder={dialogMode === Gorillana.STUDENT.CREATE ? Gorillana.COMMON.AUTO_INPUT : ""} style={{marginBottom:24, width:"100%"}} label={Gorillana.STUDENT.STUDENT_ID} variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Numeric color="action"/> : </InputAdornment>)}}/>
                        <TextField 
                            value={editTargetStudent.studentNumber} 
                            onChange={(e) => handleTargetStudent(e, "studentNumber")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label={Gorillana.STUDENT.STUDENT_NUMBER} 
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                        />
                        <TextField 
                            value={editTargetStudent.lastName} 
                            onChange={(e) => handleTargetStudent(e, "lastName")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label={Gorillana.STUDENT.LAST_NAME}
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                        />
                        <TextField 
                            value={editTargetStudent.firstName} 
                            onChange={(e) => handleTargetStudent(e, "firstName")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label={Gorillana.STUDENT.FIRST_NAME}
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                            />                        
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">{Gorillana.STUDENT.FACULITY_NAME}</InputLabel>
                                <Select labelWidth={32} value={editTargetStudent.faculityId} onChange={(e) => handleTargetStudent(e, "faculityId")}>
                                    <MenuItem value={0}>{Gorillana.COMMON.NOT_SELCET}</MenuItem>
                                    <MenuItem value={1}>工学①</MenuItem>
                                    <MenuItem value={2}>理学②</MenuItem>
                                    <MenuItem value={3}>文学⑨</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">{Gorillana.STUDENT.ENTRANCE_YEAR}</InputLabel>
                                <Select labelWidth={64} value={editTargetStudent.entranceYear} onChange={(e) => handleTargetStudent(e, "entranceYear")}>
                                    <MenuItem value={0}>{Gorillana.COMMON.NOT_SELCET}</MenuItem>
                                    { targetYearRange.map(year => <MenuItem value={year.toString()}>{year + Gorillana.COMMON.FISCAL_YEAR}</MenuItem>) }
                                </Select>
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: false}})
                        setTargetStudent(defaultStudent);
                    }}
                    >{Gorillana.COMMON.CANCEL}</Button>
                    <Button onClick={() => { dialogMode === Gorillana.STUDENT.CREATE ? postStudent() : putStudent(); dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: false}})}} color="secondary">{Gorillana.STUDENT.CREATE}</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputDialog;