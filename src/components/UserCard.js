import React from "react";
import "./UserCard.css";

const UserCard = ({ user, onSelectUser }) => {
  const handleClick = () => {
    console.log("handleClick", user.id);
    onSelectUser(user.id);
  };

  return (
    <div className="user-card" onClick={handleClick}>
      <img
        className="profile-pic"
        src={user.profilepicture}
        alt={user.username}
      />
      <p className="user-name">{user.name}</p>
    </div>
  );
};

export default UserCard;
