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

type StudentProps = {
    children: StudentProperties
};


const InputDialog: React.FC<StudentProps> = (props: StudentProps) => {
    const { state, dispatch } = useContext(Store);
    const [editTargetStudent, setTargetStudent] = useState<StudentProperties>(props.children);

    const dialogMode = (props.children.studentId > 0) ? "編集" : "新規作成";

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
                new Error("予期せぬエラー");
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
                <DialogTitle>学生の{dialogMode}</DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{width:400, padding:10}}>
                        <TextField disabled={true} value={dialogMode === "編集" ? props.children.studentId : ""} placeholder={dialogMode === "新規作成" ? "自動で入力されます" : ""} style={{marginBottom:24, width:"100%"}} label="管理ID" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Numeric color="action"/> : </InputAdornment>)}}/>
                        <TextField 
                            value={editTargetStudent.studentNumber} 
                            onChange={(e) => handleTargetStudent(e, "studentNumber")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label="学籍番号" 
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                        />
                        <TextField 
                            value={editTargetStudent.lastName} 
                            onChange={(e) => handleTargetStudent(e, "lastName")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label="姓" 
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                        />
                        <TextField 
                            value={editTargetStudent.firstName} 
                            onChange={(e) => handleTargetStudent(e, "firstName")} 
                            style={{marginBottom:24, width:"100%"}} 
                            label="名" 
                            variant="outlined" 
                            InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}
                            />                        
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">学部</InputLabel>
                                <Select labelWidth={32} value={editTargetStudent.faculityId} onChange={(e) => handleTargetStudent(e, "faculityId")}>
                                    <MenuItem value={0}>未選択</MenuItem>
                                    <MenuItem value={1}>工学①</MenuItem>
                                    <MenuItem value={2}>理学②</MenuItem>
                                    <MenuItem value={3}>文学⑨</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">入学年度</InputLabel>
                                <Select labelWidth={64} value={editTargetStudent.entranceYear} onChange={(e) => handleTargetStudent(e, "entranceYear")}>
                                    <MenuItem value={0}>未選択</MenuItem>
                                    <MenuItem value={"2018"}>2018年度</MenuItem>
                                    <MenuItem value={"2019"}>2019年度</MenuItem>
                                    <MenuItem value={"2020"}>2020年度</MenuItem>
                                </Select>
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: false}})
                        setTargetStudent(defaultStudent);
                    }}
                    >キャンセル</Button>
                    <Button onClick={() => { dialogMode === "新規作成" ? postStudent() : putStudent(); dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: false}})}} color="secondary">登録</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputDialog;