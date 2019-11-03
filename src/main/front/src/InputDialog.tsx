import * as React from 'react';
import { useState, useContext } from 'react';
import { Store } from './store';
import { ActionType } from './reducer';
import { 
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, InputAdornment, FormControl,
    InputLabel, MenuItem, Select 
} from '@material-ui/core';

import { Alphabetical, Numeric } from 'mdi-material-ui'


const InputDialog: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    
    const [faculityId, changeFaculityId] = useState(0);
    const [entranceYear, changeEntranceYear] = useState(0);


    const handleChangeFaculityId = (event: React.ChangeEvent<{ value: unknown }>) => {
        changeFaculityId(event.target.value as number);
    };

    const handleChangeEntranceYear = (event: React.ChangeEvent<{value: unknown}>) => {
        changeEntranceYear(event.target.value as number);
    };

    return (
        <div>
            <Dialog open={state.isShowDialog}>
                <DialogTitle>学生の新規作成</DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{width:400, padding:10}}>
                        <TextField style={{marginBottom:24, width:"100%"}} label="管理ID" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Numeric color="action"/> : </InputAdornment>)}}/>
                        <TextField style={{marginBottom:24, width:"100%"}} label="学籍番号" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}/>
                        <TextField style={{marginBottom:24, width:"100%"}} label="姓" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}/>
                        <TextField style={{marginBottom:24, width:"100%"}} label="名" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><Alphabetical color="action"/> : </InputAdornment>)}}/>                        
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">学部</InputLabel>
                                <Select labelWidth={32} value={faculityId} onChange={handleChangeFaculityId}>
                                    <MenuItem value="">未選択</MenuItem>
                                    <MenuItem value={1}>工学①</MenuItem>
                                    <MenuItem value={2}>理学②</MenuItem>
                                    <MenuItem value={3}>文学⑨</MenuItem>
                                </Select>
                        </FormControl>
                        <FormControl style={{marginBottom:24, width:"100%"}} variant="outlined">
                            <InputLabel variant="outlined">入学年度</InputLabel>
                                <Select labelWidth={64} value={entranceYear} onChange={handleChangeEntranceYear}>
                                    <MenuItem value="">未選択</MenuItem>
                                    <MenuItem value={1}>2018</MenuItem>
                                    <MenuItem value={2}>2019</MenuItem>
                                    <MenuItem value={3}>2020</MenuItem>
                                </Select>
                        </FormControl>
                        
                        {/* <TextField label="学部" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><TitleTwoTone/></InputAdornment>)}}/>
                        <TextField label="入学年" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><LooksOneTwoTone/></InputAdornment>)}}/><TextField label="管理ID" variant="outlined" InputProps={{startAdornment:(<InputAdornment position="start"><LooksOneTwoTone/></InputAdornment>)}}/> */}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch({type: ActionType.DIALOG_CLOSE})}>キャンセル</Button>
                    <Button onClick={() => dispatch({type: ActionType.DIALOG_CLOSE})} color="secondary">登録</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputDialog;