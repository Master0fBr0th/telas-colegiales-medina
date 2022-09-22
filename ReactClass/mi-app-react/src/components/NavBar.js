import { Container, Nav, Navbar, } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <>
<Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            Telas Colegiales
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Mas Buscados</Nav.Link>
            <Nav.Link href="#pricing">Temporada 2021</Nav.Link>
            <Nav.Link href="#pricing">Temporada 2022</Nav.Link>
            <Nav.Link href="#pricing">Sale</Nav.Link>
        </Nav>
        <CartWidget />
        </Container>
    </Navbar>
    <ItemListContainer greeting ={'Bienvenidos a TelasColegiales'}/>
    </>
    )
}
export default NavBar;