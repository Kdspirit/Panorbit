import React, { useEffect, useState } from "react";
import "./MessageBox.css";
import api from "../services/api";
import $ from "jquery";

const MessageBox = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then((data) => {
      setUsers(data);
      console.log("MessageBox.js", data);
    });
  }, []);
  const toggleBox = () => {
    $("#lists-content").slideToggle("fast");
    if ($(".msz-box").hasClass("mszBox-visible")) {
      $(".msz-box").removeClass("mszBox-visible");
      $(".toggle-sign-down").hide();
      $(".toggle-sign-up").show();
    } else {
      $(".msz-box").addClass("mszBox-visible");
      $(".toggle-sign-down").show();
      $(".toggle-sign-up").hide();
    }
  };
  console.log("user msz", users);
  return (
    <aside className="msz-box">
      <header id="chat-header" onClick={toggleBox}>
        Chats<span className="toggle-sign toggle-sign-up">&#8963;</span>
        <span className="toggle-sign toggle-sign-down">&#8964;</span>
      </header>
      <div id="lists-content">
        {users.map((userElem) => (
          <div className="chat-users">
            <img
              className="chat-pic"
              src={userElem.profilepicture}
              alt={userElem.username}
            />
            <span key={userElem.id}>{userElem.name}</span>
            <span style={{fontSize: 'x-small', marginLeft: 'auto'}}>&#128994;</span>
            <br></br>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MessageBox;
