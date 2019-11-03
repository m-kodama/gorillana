import React from 'react';
import TabComponent from './TabComponent';
import { StoreProvider } from './store';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <TabComponent/>
      </div>
    </StoreProvider>
  );
}

export default App;
