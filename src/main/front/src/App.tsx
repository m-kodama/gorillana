import * as React from "react";
import { StoreProvider } from "./store";
import SideMenu from "./sidebar/components/SideMenu";
import TopSummary from './summary/components/TopSummary'

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      background: "#EEEEEE",
      display: "flex",
      minHeight: "100vh",
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div style={{display:"flex"}}>
      <StoreProvider>
        <div className={classes.sidebar}>
          <SideMenu />
        </div>
        <div style={{width:"calc(100% - 256px)", background:"#E6E6E6"}}>
          <TopSummary/>
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
