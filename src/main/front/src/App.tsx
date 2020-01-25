import * as React from "react";
import { StoreProvider } from "./store";
import SideMenu from "./sidebar/components/SideMenu";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      background: "#EEEEEE",
      display: "flex",
      minHeight: "100vh"
    }
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <StoreProvider>
      <div className={classes.app}>
        <SideMenu />
        {/* <AppbarComponent/>
        <TabComponent/> */}
      </div>
    </StoreProvider>
  );
};

export default App;
