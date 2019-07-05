import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Test } from './Styled'
function Navbar(props) {
  console.log(props);
  if (props.location.pathname === "/") return null;
  else {
    return (
      <Test>
        <Nav>
          <Link className="browse" to="/browseevents">
            Events
        </Link>
          <Link className="myevents" to="/myevents">
            My Events
        </Link>
          <Link className="messages" to="/messages">
            Messages
        </Link>
          <Link className="userprofile" to="/userprofile">
            Profile
        </Link>
        </Nav>
      </Test>
    );
  }
}

export default withRouter(Navbar);