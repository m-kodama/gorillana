import * as React from "react";
import MenuButton from "./common/components/MenuButton";
import { Home, AccountCircle } from 'mdi-material-ui';
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
      <MenuButton label="ホーム" icon={<Home/>} />
      <MenuButton label="分析" />
      <MenuButton label="学生管理">
      <MenuButton label="学生" icon={<AccountCircle/>} />
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

export default SideMenu;
