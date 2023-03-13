import logo from "./logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {CartWidget} from "../CartWidget/CartWidget";

export function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark border-bottom border-5 border-warning ">
				<Container fluid>
					<img src={logo} alt="logo" className=" header__logo rounded my-2 m-1"></img>
					<Navbar.Brand href="#home">INICIO</Navbar.Brand>

					<Nav className="me-auto ">
						<Nav.Link href="#fbicicletas">BICICLETAS</Nav.Link>
						<Nav.Link href="#REPUESTO">REPUESTOS</Nav.Link>
						<Nav.Link href="#accesorios">ACCESORIOS</Nav.Link>
					</Nav>
				</Container>
				{/* <span className="navbar-text fs-5">Tu confianza, nuestro capital.</span> */}
				<CartWidget />
			</Navbar>
		</>
	);
}
