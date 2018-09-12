import * as React from "react";
import {
  Navbar,
  Nav,
  NavItem /*, NavDropdown, MenuItem */
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default class CustomNavbar extends React.Component<{}, {}> {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Bootstrap with Typescript</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news">
              News
            </NavItem>
          </Nav> */}
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/news">
              <NavItem eventKey={3}>News</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
