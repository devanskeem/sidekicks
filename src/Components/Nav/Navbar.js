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
            
            <Link to="/browseevents">
          <Icon.Home />
        </Link>
        </Button>

        <Button>
        
          <Link to="/myevents">
           <Icon.Calendar />
        </Link>
        </Button>
        
        <Button>
          
        <Link to="/createevent">
        <Icon.PlusSquare />
        </Link>
        </Button>

        <Button>
          
          <Link to="/messages">
          <Icon.MessageSquare />
        </Link>
        </Button>

        <Button>
          
          <Link to="/userprofile">
          <Icon.User />
        </Link>
        </Button>

        </Nav>
      </Test>
    );
  }
}

export default withRouter(Navbar);
