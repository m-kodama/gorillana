import * as React from "react";
import MenuButton from "../../common/components/MenuButton";
import {
  HomeOutline,
  ChartBellCurveCumulative,
  AccountMultipleOutline,
  Calendar,
  SettingsOutline,
  CircleMedium,
} from "mdi-material-ui";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuButtonGroup from "../../common/components/MenuButtonGroup";
import { Store } from '../../store';
import YearSelectDropdown from "./YearSelectDropdown";
import UserCard from "./UserCard";
import Logo from "../../common/components/Logo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideMenu: {
      background: "#FFFFFF",
      width: 256,
      height: "100vh",
      padding: 16,
      overflow: "scroll"
    },
  })
);

const SideMenu: React.FC = () => {
  const { state } = React.useContext(Store);
  const classes = useStyles();
  return (
    <div className={classes.sideMenu}>
      <Logo />
      <UserCard userName="ケレン・ヘラー" mail="super_woman@sample.com"/>
      <YearSelectDropdown />
      <MenuButtonGroup title="メニュー" value={state.menuGroupValue}>
        <MenuButton label="ホーム" icon={<HomeOutline />} />
        <MenuButton label="分析" icon={<ChartBellCurveCumulative />} />
        <MenuButton label="学生管理" icon={<AccountMultipleOutline />}>
          <MenuButton label="学生" icon={<CircleMedium />} />
          <MenuButton label="成績" icon={<CircleMedium />} />
        </MenuButton>
        <MenuButton label="授業管理" icon={<Calendar />}>
          <MenuButton label="クラス" icon={<CircleMedium />} />
          <MenuButton label="シラバス" icon={<CircleMedium />} />
        </MenuButton>
        <MenuButton label="設定" icon={<SettingsOutline />} />
      </MenuButtonGroup>
    </div>
  );
};

export default SideMenu;
