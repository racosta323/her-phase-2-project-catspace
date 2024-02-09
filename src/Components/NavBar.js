import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import Stack from "react-bootstrap/Stack"

function NavBar(){

//put data in - create routing

    return(
        <>
            <Navbar 
                className="bg-body-primary h-25 m-2"
                bg="primary"
                data-bs-theme="dark"
                fixed="top"
            >
                <Container className='pt-2 m-auto'>
                    <Stack>
                        <Nav className='ms-auto'>
                            <Nav.Link href="#" className="text-light fs-4 px-3">Home</Nav.Link>
                            <Nav.Link href="#" className="text-light fs-4 px-3">About</Nav.Link>
                            <Nav.Link href="#" className="text-light fs-4 px-3">Add a cat!</Nav.Link>
                        </Nav>

                        <Navbar.Brand href="#home" className='my-2'>
                            <Row>
                                <Col className="align-self-center" sm={2}>
                                    <Image 
                                    src="https://shorturl.at/pxDY6"
                                    alt="UPDATE THIS"
                                    roundedCircle
                                    width={180}
                                    height={180}
                                    /> {' '}
                                </Col>

                                <Col className="align-self-center">
                                    <h1 className='text-light'>Catspace</h1>
                                    <p className="text-light">Where cats have profiles</p>
                                </Col>

                                <Col className='align-self-center'>
                                    {/*FORM HERE*/}
                                    <Form inline>
                                        <Row className="justify-content-end">
                                            <Col xs="auto">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Search for a cat"
                                                    className="mr-sm-2"
                                                />
                                            </Col>
                                            <Col xs="auto">
                                                <Button 
                                                    type="submit"
                                                    variant="light"
                                                >Submit</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Navbar.Brand>
                    </Stack>
                    


                </Container>
            </Navbar>
        </>    
    )
}

export default NavBar