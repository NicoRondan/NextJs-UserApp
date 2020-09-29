import React from "react";
import UserItem from './userItem';

const UserList = ({users}) => {
  return (
    <div className="col-md-12 p-4">
      <h2>Users List</h2>
      {users.length === 0 ? <h4 className="text-center text-muted p-3">No Users Yet</h4> : null}
      <ul className="list-group">
        {users.map((user) => (
          <UserItem user={user} key={user._id} />
        ))}
      </ul>
    </div>
  );
};


export default UserList;
