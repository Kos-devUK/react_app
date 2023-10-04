import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav(props ){
    const handleLogout = () => {
        props.logOut();
    }
    return (<header>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>Barista's Journal</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav className="ms-md-auto">
                    <NavLink onClick={handleLogout} >Log Out</NavLink>

                </Nav>
            </Container>
        </Navbar>
    </header>)
}
export default SiteNav;