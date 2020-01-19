import * as React from 'react';
import MenuButton from './common/components/MenuButton';


const SideMenu: React.FC = () => {
    return (
      <div>
        <MenuButton label="ほげ">
          <MenuButton label="ふが" />
          <MenuButton label="2" />
          <MenuButton label="3" />
        </MenuButton>
      </div>
    );
}

export default SideMenu;