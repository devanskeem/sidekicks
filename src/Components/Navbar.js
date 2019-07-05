import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  console.log(props);
  if (props.location.pathname === "/") return null;
  else {
    return (
      <nav>
        <Link className="browse" to="/browseevents">
          Events
        </Link>
        <Link className="myevents" to="/myevents">
          My Events
        </Link>
        <Link className="addevents" to="/createevent">
          Add Events
        </Link>
        <Link className="messages" to="/messages">
          Messages
        </Link>
        <Link className="userprofile" to="/userprofile">
          Profile
        </Link>
      </nav>
    );
  }
}

export default withRouter(Navbar);
