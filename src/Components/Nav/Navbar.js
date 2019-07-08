import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Test, Button, Home } from './Styled'
import * as Icon from 'react-feather'

function Navbar(props) {
  console.log(props);
  if (props.location.pathname === "/") return null;
  else {
    return (
      <Test>
        <Nav>
          
          <Button>
            <Icon.Home>
            <Link to="/browseevents">
            Events
        </Link>
        </Icon.Home>
        </Button>
        <Button>
        <Icon.Calendar>
          <Link to="/myevents">
            My Events
        </Link>
        </Icon.Calendar>
        </Button>
        
        <Button>
          <Icon.PlusSquare>
        <Link to="/createevent">
          Add Events
        </Link>
        </Icon.PlusSquare>
        </Button>

        <Button>
          <Icon.MessageSquare>
          <Link to="/messages">
            Messages
        </Link>
        </Icon.MessageSquare>
        </Button>

        <Button>
          <Icon.User>
          <Link to="/userprofile">
            Profile
        </Link>
        </Icon.User>
        </Button>
        </Nav>
      </Test>
    );
  }
}

export default withRouter(Navbar);
