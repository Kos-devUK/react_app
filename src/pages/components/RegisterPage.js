import { Container, Row, Col, Form, Button } from "react-bootstrap";

function RegisterPage() {
    return(
        <Container>
            <Row><Col><h1>Register</h1></Col></Row>
            <Row><Col>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formConfirm">
        <Form.Label>Confirm</Form.Label>
        <Form.Control type="password"  minLength="8" placeholder="Confirm Password" />
    </Form.Group>

    <Button variant="primary" type="submit">Submit &gt;&gt;</Button>
    </Form>
    </Col>
    </Row>  
    </Container>
    )

}
export default RegisterPage;