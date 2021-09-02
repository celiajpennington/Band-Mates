import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style/NavTabsHome.css';

function NavTabsHome() {
  const [activeItem, setActiveItem] = useState('home');
  const pathname = window.location.pathname;
  const path = pathname === "/" ? 'home' : pathname.substr(1);

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
      <div className="nav-bar-home">
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
            as={ Link }
            to="/"
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={ Link }
            to="/login"
          />
          <Menu.Item
            name='signup'
            active={activeItem === 'signup'}
            onClick={handleItemClick}
            as={ Link }
            to="/signup"
          />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }


export default NavTabsHome;
