import React from "react";
import UserCard from "./UserCard";
import users from "../users";

const UserList = () => {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.username} user={user} />
      ))}
    </div>
  );
};

export default UserList;
