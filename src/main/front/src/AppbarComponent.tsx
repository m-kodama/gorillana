import * as React from "react";
import { useState } from "react";
import { AppBar, Toolbar, FormControl, Select, Avatar, MenuItem, IconButton, Popover, Typography, Box, Button } from '@material-ui/core';
import moment from 'moment';
import { AccountEdit, CellphoneSettingsVariant } from 'mdi-material-ui';
import logo from './static/images/logo.png';
import avatarSample from './static/images/avatar_sample.png';

moment.locale("ja");


const AppbarComponent = () => {
    const targetYearRange = [moment().subtract(1, 'year').year(), moment().year(), moment().add(1, 'year').year()];
    const [displayYear, setDisplayYear] = useState<string>(moment().year().toString());
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleDisplayYear = (e: React.ChangeEvent<{value: unknown}>) => {
        setDisplayYear(e.target.value as string);
    }

    const handleClickAvatar = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = () => {
      setAnchorEl(null);
    }

    const showConfirmPopOver = () => {
      return (
          <Popover open={Boolean(anchorEl)} onClose={handlePopoverClose} anchorEl={anchorEl} anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
          }}>
              <div style={{width:250, height:280, margin:15, display:"flex", flexFlow:"column"/*alignItems:"center"*/}}>
                <div style={{height: 180, width: 250}}>
                  <Avatar style={{width:60, height:60, margin: "0 auto"}} src={avatarSample}/>
                  <Typography component="div" style={{marginTop: 15, textAlign:"center"}}>
                    <Box style={{color:"#616161"}} fontWeight="fontWeightBold" letterSpacing={1}>山田太郎</Box>
                    <Box style={{color:"#9E9E9E", fontSize:14}}>administrator@sample.com</Box>
                    <Button style={{marginTop: 10, width: 200, boxShadow:"none"}} variant="contained" color="secondary"><CellphoneSettingsVariant style={{marginRight: 5}}/>ユーザ設定</Button>
                  </Typography>
                </div>
                <div style={{width:250, textAlign:"center"}}>
                  <Button style={{margin: 10, width: 200}} variant="outlined">ログアウト</Button>
                  <Button style={{fontSize:12}} variant="text">プライバシーポリシー</Button> / 
                  <Button style={{fontSize:12}} variant="text">利用規約</Button>
                </div>
              </div>
          </Popover>
      );
  }

    return (
        <div>
            <AppBar position="static" style={{minHeight: "48px", backgroundColor:"#FFF", boxShadow: "none", borderBottom: "1px solid #E0E0E0"}}>
            <Toolbar style={{minHeight:"40px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              { Boolean(anchorEl) && showConfirmPopOver() }
                  <img src={logo} width={120}></img>
                <div style={{display:"flex", alignItems:"center"}}>
                <div style={{borderRight: "1px solid #E0E0E0", height:32, marginRight:16}}/>
                  <FormControl variant="outlined" style={{width:136}}>
                    <Select style={{margin: "0px 10px", height:40, color:"#9E9E9E"}} onChange={handleDisplayYear} value={displayYear}>
                        {　targetYearRange.map(year => <MenuItem value={year.toString()}>{year.toString()}年度</MenuItem>)　}
                    </Select>
                  </FormControl>
                  <IconButton style={{padding:8}} onClick={(e) => handleClickAvatar(e)}><Avatar src={avatarSample}/></IconButton>
                  <Typography variant="subtitle2" style={{maxWidth:80, color:"#9E9E9E", marginLeft:8, textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>山田太郎</Typography>
                </div>
            </Toolbar>
          </AppBar>
        </div>
    )
}

export default AppbarComponent;
