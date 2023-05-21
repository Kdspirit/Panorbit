import React from "react";

const PostsDetails = (user) => {
  console.log("pd ", user);
  return (
    <div>
      <section className="profile-nav">
        <h2>Posts</h2>

        <div>
          <img
            className="logout-pic"
            src={user.profilepicture}
            alt={user.username}
          />
          <h3>{user.name}</h3>
        </div>
      </section>
      <img
        className="coming-soon"
        src='/img/comingSoon.png'
        alt='coming Soon'
      />
    </div>
  );
};

export default PostsDetails;
