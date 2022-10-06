//import { Container, Nav, Navbar, } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import './CartWidget.css';
import ItemListContainer from "./ItemListContainer";
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        
<Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to = '/'>
          Telas Colegiales
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to = '/'>
              Home
              </Nav.Link>
            <Nav.Link as={Link} to = '/category/Stock'>Stock</Nav.Link>
            <NavDropdown title="Buscar" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to = '/category/MasComprados'>Mas Comprados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Temporada 2022
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to = '/category/MasBuscados'>Mas Buscados</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = '/category/SALE'>
                SALE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget></CartWidget>
    </Navbar>
  );
}
export default NavBar;