import { signOut } from "firebase/auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "./CustomLink";
const Header = () => {
  const [user] = useAuthState(auth);

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

            {user ? (
              <>
                <CustomLink to="/myitem">My Item</CustomLink>
                <Button onClick={() => signOut(auth)}>Sign Out</Button>
              </>
            ) : (
              <>
                <CustomLink to="/login">Login</CustomLink>
                <CustomLink to="/signup">SignUp</CustomLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
