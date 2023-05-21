import React from "react";

const Gallery = (user) => {
  return (
    <div>
      <section className="profile-nav">
        <h2>Gallery</h2>

        <div className="logout-dropdown">
          <img
            className="logout-pic"
            src={user.profilepicture}
            alt={user.username}
          />
          <h3 className="logout-name">{user.name}</h3>
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

export default Gallery;
