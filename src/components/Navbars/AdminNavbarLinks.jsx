
import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavItem href="#">
            Help
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
