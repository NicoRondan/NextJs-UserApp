import React, { Fragment, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { addUser } from "../services/user";

function Home() {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [response, setResponse] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserLastName = (e) => {
    setUserLastName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { userName, userLastName };
    setLoading(true);

    addUser(user)
      .then((res) => {
        setLoading(false);
        setResponse(true);
        setMsg("User Created!");
      })
      .catch((err) => {
        setLoading(false);
        setResponse(false);
        setMsg("Server error!");
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
      <div className="row p-4 ">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            {loading ? (
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            ) : response !== null ? (
              <div
                className={`alert alert-${response ? "success" : "danger"}`}
                role="alert"
              >
                {msg}
              </div>
            ) : null}
            <h3 className="text-center">Create A New User</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={userName}
                  placeholder="FirstName"
                  className="form-control"
                  onChange={onChangeUserName}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={userLastName}
                  placeholder="LastName"
                  className="form-control"
                  onChange={onChangeUserLastName}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
