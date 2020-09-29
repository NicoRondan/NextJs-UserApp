import UserList from "../components/list/userList";
import Nav from "../components/nav";
import Head from 'next/head';
import React, {Fragment} from 'react';
import { getUsers } from "../services/user";

const Users = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Users App</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css"
          integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <UserList users={props.users}/>
    </Fragment>
  );
};

Users.getInitialProps = async () => {
  const res = await getUsers();
  const users = res.data;
  return { users };
};

export default Users;
