import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="/">MovieDB</Navbar.Brand>
          <Navbar.Toggle onClick={() => setShow(true)} />
          <Navbar.Offcanvas
            show={show}
            onHide={() => setShow(false)}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>MovieDB</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to="/"
                >
                  Popular
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/top-rated"
                >
                  Top Rated
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/upcoming"
                >
                  Upcoming
                </Nav.Link>
              </Nav>
              <Form
                className="d-flex"
                onSubmit={handleSearch}
              >
                <Form.Control
                  type="search"
                  placeholder="Search movies..."
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="secondary"
                  type="submit"
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
