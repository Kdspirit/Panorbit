import React, { useState } from 'react';
import SideMenu from './SideMenu';
import ProfileDetails from './ProfileDetails';
import PostsDetails from './PostsDetails';
import Gallery from './Gallery';
import ToDo from './ToDo';
import './ProfilePage.css'

const ProfilePage = ({ user }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'profile':
        return <ProfileDetails user={user} />;
      case 'posts':
        return <PostsDetails user={user} />;
      case 'gallery':
        return <Gallery user={user} />;
      case 'todo':
        return <ToDo user={user} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <SideMenu activeMenuItem={activeMenuItem} onItemClick={handleMenuItemClick} />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
