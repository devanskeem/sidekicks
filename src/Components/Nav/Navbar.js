import React from "react";
import { Link, withRouter } from "react-router-dom";
import {  Button, MobileBody, NavBorder,P } from "./Styled";
import {DesktopBody, Navigation} from './DesktopStyle'

import * as Icon from "react-feather";

function Navbar(props) {
  if (props.location.pathname === "/") return null;
  else {
    return (
      <div>
        <MobileBody>
          <NavBorder>
            <Button>
              <Link to="/browseevents">
                <Icon.Home />
              </Link>
                <P>home</P>
            </Button>
            <Button>
              <Link to="/myevents">
                <Icon.Calendar />
              </Link>
              <P>my events</P>
            </Button>
            <Button>
              <Link to="/createevent">
                <Icon.PlusSquare />
              </Link>
              <P>create</P>
            </Button>
            {/* <Button>
              <Link to="/messages">
                <Icon.MessageSquare />
              </Link>
              <P>messages</P>
            </Button> */}
            <Button>
              <Link to="/userprofile">
                <Icon.User />
              </Link>
              <P>profile</P>
            </Button>
        </NavBorder>
        </MobileBody>
  
      </div>
    );
  }
}

export default withRouter(Navbar);
