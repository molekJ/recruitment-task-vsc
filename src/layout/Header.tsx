import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>VSC - posts</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/posts">
              Posts
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
