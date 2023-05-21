import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./ProfileDetails.css";
import MessageBox from "./MessageBox";

const ProfileDetails = ({ user }) => {
  const history = useHistory();
  console.log("ProfileDetails", user);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    // Perform sign out actions
    // Clear user authentication data or reset application state

    // Redirect to the landing page
    history.push('/');
  };
  return (
    <>
      <section className="profile-nav dropdown">
        <h2>Profile</h2>
        <div className="logout-dropdown dropbtn" onClick={handleDropdownToggle}>
          <img
            className="logout-pic"
            src={user.profilepicture}
            alt={user.username}
          />
          <h3 className="logout-name">{user.name}</h3>
        </div>
        <div>
          {isOpen && (
            <div className="dropdown-content">
              {/* Dropdown content */}
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <button className="logOut-btn" onClick={handleSignOut}>Sign out</button>
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className="profile-wrapper">
        <div className="profile-details">
          <div className="user-details">
            <img
              className="profile-details-pic"
              src={user.profilepicture}
              alt={user.username}
            />
            <p className="profile-name">{user.name}</p>
            <p className="profile-user-name">
              <span className="detail-title">Username &nbsp;:&nbsp; </span>
              {user.username}
            </p>
            <p className="user-email">
              <span className="detail-title">e-mail &nbsp;:&nbsp; </span>
              {user.email}
            </p>
            <p className="user-phone">
              <span className="detail-title">Phone &nbsp;:&nbsp; </span>
              {user.phone}
            </p>
            <p className="user-website">
              <span className="detail-title">website &nbsp;:&nbsp; </span>
              {user.website}
            </p>
          </div>
          <h3 style={{ color: "#9a9a9a" }}>Company</h3>
          <div className="company-details">
            <p className="company-name">
              <span className="detail-title">Name &nbsp;:&nbsp; </span>
              {user.company.name}
            </p>
            <p className="company-catchphrase">
              <span className="detail-title">catchphrase &nbsp;:&nbsp; </span>
              {user.company.catchPhrase}
            </p>
            <p className="company-bs">
              <span className="detail-title">bs &nbsp;:&nbsp; </span>
              {user.company.bs}
            </p>
          </div>
        </div>

        <div className="profile-address">
          <p style={{ color: "#9a9a9a" }}>Address &nbsp;:&nbsp; </p>
          <p className="street">
            <span className="detail-title">Street &nbsp;:&nbsp; </span>
            {user.address.street}
          </p>
          <p className="street">
            <span className="detail-title">Suite &nbsp;:&nbsp; </span>
            {user.address.suite}
          </p>
          <p className="city">
            <span className="detail-title">City &nbsp;:&nbsp; </span>
            {user.address.street}
          </p>
          <p className="zipcode">
            <span className="detail-title">Zipcode &nbsp;:&nbsp; </span>
            {user.address.zipcode}
          </p>
          <img
            className="map-pic detail-title"
            src="/img/mapImg.png"
            alt="location map"
          />
          <p className="geo-location">
            <span className="loc-lat detail-title">Lat:</span>&nbsp;
            {user.address.geo.lat}
            <span className="loc-long detail-title">Long:</span>&nbsp;
            {user.address.geo.lng}
          </p>
          <MessageBox />
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
