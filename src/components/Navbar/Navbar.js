import classes from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container className={classes.navbar}>
          <Navbar.Brand href="#home"><h1>Shortly</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className={classes.navbarCollapse}>
            <Nav className={classes["navbar-nav"]}>
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Resources</Nav.Link>
            </Nav>
            <div className={classes["navbar-action"]}>
              <button className={classes["navbar-login"]}>Login</button>
              <button className={classes["navbar-signup"]}>Sign Up</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
