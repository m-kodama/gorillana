import * as React from 'react';
import { useContext } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Tooltip, Popover, Typography } from '@material-ui/core';
import { EditTwoTone, DeleteTwoTone } from '@material-ui/icons';
import { TrashCanOutline, AccountPlus, FileMove } from 'mdi-material-ui';
import { StudentProperties, defaultStudent } from './const';
import InputDialog from './InputDialog';
import axios from 'axios';
import _ from 'lodash';
import { Gorillana } from './messageResource';

type StudentProps = {
    children: StudentProperties[]
};

const TableComponent: React.FC<StudentProps> = (props: StudentProps) => {
    const { state, dispatch } = useContext(Store);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [targetStudent, setTargetStudent] = React.useState<StudentProperties>(defaultStudent);
   
    const headerElements = [
        Gorillana.STUDENT.STUDENT_ID, 
        Gorillana.STUDENT.STUDENT_NUMBER, 
        Gorillana.STUDENT.LAST_NAME, 
        Gorillana.STUDENT.FIRST_NAME, 
        Gorillana.STUDENT.FACULITY_NAME, 
        Gorillana.STUDENT.CLASS, 
        Gorillana.STUDENT.ENTRANCE_YEAR, 
        "", 
        ""
    ]

    const students = state.students;

    const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>, row: StudentProperties) => {
        setAnchorEl(event.currentTarget);
        setTargetStudent(row);
    }

    const deleteStudent = async () => {
        const targetStudentId = targetStudent.studentId;
        await axios.delete<StudentProperties[]>("http://localhost:8080/api/students/" + targetStudentId).then((response) => {
        const updatedStudents = _.clone(state.students).filter(student => student.studentId !== targetStudentId);
             dispatch({
                 type: ActionType.STUDENT_UPDATE,
                 payload: {
                     ...state,
                     students: updatedStudents
                 }
             });
             setAnchorEl(null);
        });
    }

    const showConfirmPopOver = () => {
        return (
            <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}>
                <div style={{margin:15, display:"flex", alignItems:"center"}}>
                    <TrashCanOutline color="secondary"/>
        <Typography style={{fontWeight:"bold", marginLeft:5, fontSize:14}}>{Gorillana.COMMON.CONFIRM_DELETE}</Typography>
                </div>
                <div style={{display:"flex", margin:10, flexDirection:"row-reverse"}}>
        <Button size="small" onClick={deleteStudent} color="secondary">{Gorillana.COMMON.OK}</Button>
                    <Button size="small" onClick={() => setAnchorEl(null)}>{Gorillana.COMMON.CANCEL}</Button>
                </div>
            </Popover>
        );
    }

    return (
        <div>
            <div style={{textAlign:"center", margin:"15px 0px"}}>
                <Button style={{margin:"5px 5px", boxShadow:"none"}} variant="contained" color="secondary" startIcon={<AccountPlus/>} onClick={() => { setTargetStudent(defaultStudent);dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: true}})}}>{Gorillana.STUDENT.CREATE}</Button>
    <Button style={{margin:"5px 5px", backgroundColor:"#FFFFFF"}} variant="outlined" startIcon={<FileMove/>}>{Gorillana.STUDENT.CREATE_FROM_CSV}</Button>
            </div>
            <Paper style={{width:"90%", margin:"0 auto"}}>
                { Boolean(anchorEl) && showConfirmPopOver() }
                { state.isShowDialog && <InputDialog>{targetStudent}</InputDialog>}
            
                <Table>
                    <TableHead>
                        <TableRow>
                            { headerElements.map(headerCell => <TableCell style={{textAlign:"center"}}>{headerCell}</TableCell>) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { 
                                students.map((row, index) => {
                                    return (
                                        <TableRow>
                                            {_.map(row).map(cell => <TableCell style={{textAlign:"center"}}>{cell}</TableCell>)}
                                            <Tooltip title={Gorillana.STUDENT.EDIT}><TableCell style={{textAlign:"center"}}><Button onClick={(e) => {setTargetStudent(row);dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: true}})}}><EditTwoTone/></Button></TableCell></Tooltip>
                                            <Tooltip title={Gorillana.STUDENT.DELETE}><TableCell style={{textAlign:"center"}}><Button onClick={(e) => handleClickDelete(e, row)}><DeleteTwoTone/></Button></TableCell></Tooltip>
                                        </TableRow>
                                    )
                                })
                            }
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
};

export default TableComponent;