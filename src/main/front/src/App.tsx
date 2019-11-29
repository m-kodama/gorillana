import * as React from 'react';
import TabComponent from './TabComponent';
import AppbarComponent from './AppbarComponent';
import { StoreProvider } from './store';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <AppbarComponent/>
        <TabComponent/>
      </div>
    </StoreProvider>
  );
}

export default App;
