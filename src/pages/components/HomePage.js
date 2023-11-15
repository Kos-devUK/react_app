import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import './components.css';

function HomePage(){
    return(
        <Container>
        <Row className="row">
                <Col xs={4} sm={6}>
                    <Image src="/assets/barista.png" className="baristalogo" fluid/>
                </Col>
                <Col sm={6}>
                    <h1>Welcome to barista's journal</h1>
                    <p>An app to keep all your recipes together</p>
                    <Link to={{pathname:'/recipes'}} > <br/>
                    <Button>View Recipes</Button></Link>
                </Col>
        </Row>
        </Container>
    )
};
export default HomePage;