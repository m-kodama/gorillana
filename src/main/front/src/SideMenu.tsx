import * as React from 'react';
import MenuButton from './common/components/MenuButton';

import { Home, ChartBar, AccountGroup, AccountCircle, ClipboardText, CalendarEdit, Settings } from "mdi-material-ui";



const SideMenu: React.FC = () => {
    return (
      <div>
        <MenuButton label="HOME" icon={<Home/>}/>
        <MenuButton label="分析" icon={<ChartBar/>}/>
        <MenuButton label="学生管理" icon={<AccountGroup/>}>
          <MenuButton label="学生" icon={<AccountCircle/>}/>
          <MenuButton label="成績" icon={<ClipboardText/>}/>
        </MenuButton>
        <MenuButton label="授業管理" icon={<CalendarEdit/>}/>
        <MenuButton label="設定" icon={<Settings/>}/>
      </div>
    );
}

export default SideMenu;