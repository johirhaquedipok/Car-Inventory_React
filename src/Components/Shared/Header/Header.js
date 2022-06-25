import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Car <span className="fw-bold">Invento</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/signup">SignUp</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
