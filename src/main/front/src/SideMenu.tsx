import * as React from "react";
import MenuButton from "./common/components/MenuButton";

<<<<<<< HEAD
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
=======
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideMenu: {
      background: "#FFFFFF",
      width: "256px",
      padding: "16px"
    },
    sectionTitle: {
      color: "#84898C",
      fontSize: 12,
      fontWeight: "bold",
      padding: "0 8px 4px 8px"
    }
  })
);

const SideMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <div className={classes.sectionTitle}>メニュー</div>
      <MenuButton label="ホーム" />
      <MenuButton label="分析" />
      <MenuButton label="学生管理">
        <MenuButton label="学生" />
        <MenuButton label="成績" />
      </MenuButton>
      <MenuButton label="授業管理">
        <MenuButton label="クラス" />
        <MenuButton label="シラバス" />
      </MenuButton>
      <MenuButton label="設定" />
    </div>
  );
};
>>>>>>> b59177541d855db8a2b21f0ed2b9c397216a6ac1

export default SideMenu;
