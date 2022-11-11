import React from "react";
import { useParams } from "react-router";
import Header from "../layout/Header";
import usersData from "./data.json";

function UserDetail() {
  console.log("야호")
  console.log(usersData)
  const { id } = useParams();
  const users = usersData.users.find(user => user.id === id);

  return (
    <>
      <Header></Header>
      <div className="content">
        <h2 className="title-type">User Detail</h2>
        <div className="user">
          <div className="user-info">
            <dl>
              <dt>id</dt>
              <dd>{users.id}</dd>
            </dl>
            <dl>
              <dt>name</dt>
              <dd>{users.name}</dd>
            </dl>
            <dl>
              <dt>nickname</dt>
              <dd>{users.nickname}</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;