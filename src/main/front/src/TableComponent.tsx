import * as React from 'react';
import { useContext } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Tooltip, Popover, Typography } from '@material-ui/core';
import { EditTwoTone, DeleteTwoTone, PersonAddTwoTone, InsertDriveFileTwoTone } from '@material-ui/icons';
import { TrashCanOutline } from 'mdi-material-ui';
import { StudentProperties, defaultStudent } from './const';
import InputDialog from './InputDialog';
import axios from 'axios';
import _ from 'lodash';

type StudentProps = {
    children: StudentProperties[]
};

const TableComponent: React.FC<StudentProps> = (props: StudentProps) => {
    const { state, dispatch } = useContext(Store);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [targetStudent, setTargetStudent] = React.useState<StudentProperties>(defaultStudent);
   
    const headerElements = ["管理ID", "学籍番号", "姓", "名", "学部", "クラス", "入学年度", "", ""];
    
    const students = state.students;

    const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>, row: StudentProperties) => {
        setAnchorEl(event.currentTarget);
        setTargetStudent(row);
    }


    const deleteStudent = async () => {
        const targetStudentId = targetStudent.studentId;
        await axios.delete<StudentProperties[]>("http://localhost:8080/api/students/" + targetStudentId).then((response) => {
             dispatch({
                 type: ActionType.STUDENT_UPDATE,
                 payload: {
                     ...state,
                     students: response.data
                 }
             });
             setAnchorEl(null);
        });
    }

    const showConfirmPopOver = () => {
        return <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}>
                <div style={{margin:15, display:"flex", alignItems:"center"}}>
                    <TrashCanOutline color="secondary"/>
                    <Typography style={{fontWeight:"bold", marginLeft:5, fontSize:14}}>本当に削除しますか？</Typography>
                </div>
                <div style={{display:"flex", margin:10, flexDirection:"row-reverse"}}>
                    <Button size="small" onClick={deleteStudent} color="secondary">OK</Button>
                    <Button size="small" onClick={() => setAnchorEl(null)}>キャンセル</Button>
                </div>
            </Popover>
    }

    return (
        <div>
            <div style={{textAlign:"center", margin:"15px 0px"}}>
                <Button style={{margin:"5px 5px"}} variant="outlined" color="secondary" startIcon={<PersonAddTwoTone/>} onClick={() => { setTargetStudent(defaultStudent);dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: true}})}}>新規作成</Button>
                <Button style={{margin:"5px 5px"}} variant="outlined" startIcon={<InsertDriveFileTwoTone/>}>CSVから新規作成</Button>
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
                                            <Tooltip title="学生を編集する"><TableCell style={{textAlign:"center"}}><Button onClick={(e) => {setTargetStudent(row);dispatch({type: ActionType.DIALOG_UPDATE, payload:{...state, isShowDialog: true}})}}><EditTwoTone/></Button></TableCell></Tooltip>
                                            <Tooltip title="学生を削除する"><TableCell style={{textAlign:"center"}}><Button onClick={(e) => handleClickDelete(e, row)}><DeleteTwoTone/></Button></TableCell></Tooltip>
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