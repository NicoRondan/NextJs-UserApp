import React, { Fragment, useState } from "react";
import Nav from "../../components/nav";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "../../services/user";
import { useUtils } from "../../redux/dispatcher/dispatch";

const UserPage = (props) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const {
    loading,
    isLoading,
    notLoading,
    response,
    isResponse,
    notResponse,
    msg,
    successMsg,
    errorMsg,
  } = useUtils();

  const { uid } = props.query;
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName };
    isLoading();

    updateUserById(uid, user)
      .then((res) => {
        notLoading();
        isResponse();
        successMsg("User Updated!");
      })
      .catch((err) => {
        notLoading();
        notResponse();
        errorMsg("Server error!");
      });
  };

  const deleteUser = () => {
    isLoading();

    deleteUserById(uid)
      .then((res) => {
        notLoading();
        isResponse();
        successMsg("User Deleted!");
        setTimeout(() => {
          router.push("/users");
          successMsg("");
        }, 2000);
      })
      .catch((err) => {
        notLoading();
        notResponse();
        errorMsg("Server error!");
      });
  };

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
      <div className="col-md-6 offset-md-3 p-4">
        <div className="card card-body">
          {loading ? (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "55%" }}
              ></div>
            </div>
          ) : response !== null ? (
            msg !== "" ? (
              <div
                className={`alert alert-${response ? "success" : "danger"}`}
                role="alert"
              >
                {msg}
              </div>
            ) : null
          ) : null}
          <h4 className="text-center">User Information </h4>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="FirstName"
              name="firstname"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="LastName"
              name="lastname"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <form onSubmit={onSubmit}>
            <div className="btn-block text-center btn-group">
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => deleteUser()}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

UserPage.getInitialProps = async (ctx) => {
  const user = await getUserById(ctx.query.uid);
  return {
    query: ctx.query,
    firstName: user.data.firstName,
    lastName: user.data.lastName,
  };
};

export default UserPage;
