import React from "react";
import ScrollableList from "./ScrollableList";

const LandingPage = ({ users, onSelectUser }) => {
  return (
    <div>
      <img alt="wave" src="/img/wave.svg" />
      <ScrollableList users={users} onSelectUser={onSelectUser} />
    </div>
  );
};

export default LandingPage;
