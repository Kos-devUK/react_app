import { Container, Row, Col, Button, Form } from "react-bootstrap";

function LoginPage() {
    return(
    <Container>
        <Row>
            <Col><h1>LogIn</h1></Col>
        </Row>
        <Row>
            <Col>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
        <Button variant="primary" type="submit">LogIn &gt;&gt;</Button>
            </Form>
            </Col>
        </Row>
    </Container>
)}
export default LoginPage;