import React from "react";
import UserCard from "./UserCard";
import "./ScrollableList.css";

const ScrollableList = ({ users, onSelectUser }) => {
  console.log("ScrollableList page", users);

  return (
    <section id="list-scroll">
      <div className="acc-list">
        {/* Renders scrollable list of user cards */}
        <div className="sel-heading">Select an account</div>
        <div className="acc-lists-content">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onSelectUser={onSelectUser} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollableList;
