import React from 'react';

const AccountDropdown = ({ loggedInUser, otherUsers, onSignOut }) => {
  return (
    <div>
      <img src={loggedInUser.profilePicture} alt="Profile" />
      <p>{`${loggedInUser.fullName} (${loggedInUser.username})`}</p>
      <ul>
        {otherUsers.map((user) => (
          <li key={user.id}>
            <img src={user.profilePicture} alt={user.username} />
            {user.username}
          </li>
        ))}
      </ul>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
};
export default AccountDropdown;
