import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import api from "../services/api";

const Landing = ({ history }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then((data) => {
      setUsers(data);
      console.log("Landing.js api.getUsers", data);
    });
  }, []);

  const handleSelectUser = (userId) => {
    history.push(`/profile/${userId}`);
  };

  return (
    <div>
      <LandingPage users={users} onSelectUser={handleSelectUser} />
    </div>
  );
};

export default Landing;
