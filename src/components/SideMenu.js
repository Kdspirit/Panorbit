import React from 'react';
import'./SideMenu.css';

const SideMenu = ({ activeMenuItem, onItemClick }) => {
    return (
      <div className="side-menu">
        <div className='menu-options'>
          <h3
            className={activeMenuItem === 'profile' ? 'active' : ''}
            onClick={() => onItemClick('profile')}
          >
            Profile
          </h3>
          <h3
            className={activeMenuItem === 'posts' ? 'active' : ''}
            onClick={() => onItemClick('posts')}
          >
            Posts
          </h3>
          <h3
            className={activeMenuItem === 'gallery' ? 'active' : ''}
            onClick={() => onItemClick('gallery')}
          >
            Gallery
          </h3>
          <h3
            className={activeMenuItem === 'todo' ? 'active' : ''}
            onClick={() => onItemClick('todo')}
          >
            ToDo
          </h3>
        </div>
      </div>
    );
  };
  
  export default SideMenu;
  
