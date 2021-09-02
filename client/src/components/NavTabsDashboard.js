import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function NavTabsDashboard(props) {
  console.log('NAV HOME!!!')
  const [activeItem, setActiveItem] = useState('home');
  const pathname = window.location.pathname;
  const path = pathname === "/" ? 'home' : pathname.substr(1);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  if(props.loggedIn === true){
     // do these tabs
  } else {
    // do these tabs
  }

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Dashboard'
            active={activeItem === 'dashboard'}
            onClick={handleItemClick}
            as={ Link }
            to="/dashboard"
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='View All Posts'
            active={activeItem === 'viewallposts'}
            onClick={handleItemClick}
            as={ Link }
            to="/viewallposts"
          />
          <Menu.Item
            name='View My Posts'
            active={activeItem === 'viewmyposts'}
            onClick={handleItemClick}
            as={ Link }
            to="/viewmyposts"
          />
          <Menu.Item
            name='Create Post'
            active={activeItem === 'createpost'}
            onClick={handleItemClick}
            as={ Link }
            to="/createpost"
          />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }


export default NavTabsDashboard;
