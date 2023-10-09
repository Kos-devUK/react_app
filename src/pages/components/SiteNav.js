import { Button, NavLink, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./components.css"

function SiteNav(props ){
    const handleLogout = () => {
        props.logOut();
    }
    return (<header>
        <Navbar className='navbar'  expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>Barista's Journal</Navbar.Brand>

                <Link to={{pathname:'/'}}> 
                    <Button>Home</Button></Link>          
                
                <Nav className="ms-md-auto">
                    <NavLink onClick={handleLogout}>Log Out</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </header>)
}
export default SiteNav;