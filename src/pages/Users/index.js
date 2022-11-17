import React from "react";
import Header from "../layout/Header";
import UserList from "./UserList";

function Users() {
  return (
    <div>
      <Header></Header>
      <div className="content">
        <h2 className="title-type">User List</h2>
        <div className="user">
          <UserList></UserList>
        </div>
      </div>
    </div>
  );
}

export default Users;