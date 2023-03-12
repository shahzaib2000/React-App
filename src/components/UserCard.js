import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.profilePicture} alt="Profile" />
      <h2>{user.username}</h2>
      <p>{user.firstName} {user.lastName}</p>
      <p>{user.school}</p>
      <p>{user.email}</p>
      <p style={{ color: user.classLevel === "Freshmen" ? "green" : "black" }}>{user.classLevel}</p>
    </div>
  );
};

export default UserCard;
