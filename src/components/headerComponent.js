import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import profile from "../Profile.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand="md">
      <NavbarBrand>Priority Pulse</NavbarBrand>
      <NavbarToggler className="toggler" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="my-auto">
            <NavLink className="primary-text-color active px-3">Home</NavLink>
          </NavItem>
          <NavItem className="my-auto">
            <NavLink className="primary-text-color px-3">Active Rides</NavLink>
          </NavItem>
          <NavItem className="my-auto">
            <NavLink className="primary-text-color px-3">Profile</NavLink>
          </NavItem>
          <NavItem className="my-auto">
            <NavLink className="primary-text-color px-3">Logout</NavLink>
          </NavItem>
          <NavItem className="my-auto">
            <img
              className="img-responsive profile ml-2"
              src={profile}
              alt="Profile"
            />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
