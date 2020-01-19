import * as React from 'react';
import { StoreProvider } from './store';
import SideMenu from './SideMenu';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <SideMenu/>
        {/* <AppbarComponent/>
        <TabComponent/> */}
      </div>
    </StoreProvider>
  );
}

export default App;
