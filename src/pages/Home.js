import React, { useEffect, useState } from "react";
import ProfilePage from "../components/ProfilePage";
import api from "../services/api";

const Home = ({ match }) => {
  const [user, setUser] = useState(null);
  
  console.log("home.js", match);
  useEffect(() => {
    const userId = match.params.userId;
    api.getUser(userId).then((data) => {
      setUser(data);
    });
  }, [match.params.userId]);

  return (
    <div className="home-page" style={{margin: '38px 0'}}>
      {user ? <ProfilePage user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
