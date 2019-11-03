import * as React from 'react';
import { useContext } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Paper, Tooltip } from '@material-ui/core';
import { EditTwoTone, DeleteTwoTone } from '@material-ui/icons';
import { StudentProperties } from './const';
import _ from 'lodash';

const TableComponent: React.FC<StudentProperties[]> = (props: StudentProperties[]) => {
    const { state, dispatch } = useContext(Store);
    const headerElements = ["管理ID", "学籍番号", "姓", "名", "学部", "クラス", "入学年度", "", ""];
    const dammyData: StudentProperties[] = [
        {
            id: 1,
            studentNumber: "GSB1000",
            lastName: "たなか",
            firstName: "たろう",
            faculityId: 1,
            classId: 3,
            entranceYear: 2009
        },
        {
            id: 2,
            studentNumber: "GSB1001",
            lastName: "すずき",
            firstName: "はなこ",
            faculityId: 1,
            classId: 4,
            entranceYear: 2009
        }
    ];

    return (
        
            <Paper style={{width:"90%", margin:"0 auto"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            { headerElements.map(headerCell => <TableCell style={{textAlign:"center"}}>{headerCell}</TableCell>) }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { 
                                dammyData.map(row => {
                                    return (
                                        <TableRow>
                                            {_.map(row).map(cell => <TableCell style={{textAlign:"center"}}>{cell}</TableCell>)}
                                            <Tooltip title="学生を編集する"><TableCell style={{textAlign:"center"}}><Button onClick={() => dispatch({type: ActionType.DIALOG_OPEN})}><EditTwoTone/></Button></TableCell></Tooltip>
                                            <Tooltip title="学生を削除する"><TableCell style={{textAlign:"center"}}><Button><DeleteTwoTone/></Button></TableCell></Tooltip>
                                        </TableRow>
                                    )
                                })
                            }
                    </TableBody>
                </Table>
            </Paper>
    );
};

export default TableComponent;