import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import logo from "../assests/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="top-header">
      <Navbar bg="light" fixed="top" expand="md" className="px-5 border-0 ">
        <LinkContainer to="/">
          <NavbarBrand>
            <Image src={logo} alt="Logo" />
          </NavbarBrand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/finance">
              <Nav.Link>Finance</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/#">
              <Nav.Link>
                <FontAwesomeIcon icon="fa-duotone fa-bars" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
export default Header;
