import { Container, Col, Row, Figure, Image, Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import CatButtons from "./CatButtons";

function Home() {
    const { cats, searchTerm } = useOutletContext();

    const addCatButton = (
        <Col xs={12} sm={6} md={4} lg={3} className="cat-button" key="add-cat">
            <Button href="/addacat" className="d-block mb-4 h-100 p-0 border-0" variant="outline-light">
                <Figure className="m-0">
                    <Figure.Image
                        width={200}
                        height={180}
                        alt="Add a cat"
                        src="https://res.cloudinary.com/djsqcm710/image/upload/f_auto,q_auto/newCatImage_ivzaq2_tf6puy"
                        roundedCircle
                        className="mx-auto"
                        style={{opacity:0.6}}
                    />
                    <Figure.Caption className="fs-3 text-center">
                        Add a cat
                    </Figure.Caption>
                </Figure>
            </Button>
        </Col>
    );

    const filteredCats = searchTerm
        ? cats.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : cats;

    const renderCats = [
        ...filteredCats.map(cat => (
            <Col xs={12} sm={6} md={4} lg={3} className="cat-button" key={cat.id}>
                <CatButtons name={cat.name} image={cat.profilePhoto} id={cat.id} />
            </Col>
        ))
    ];

    return (
        <Container className="px-5">
            
            <Row className="mb-4 ps-5">
                <Col className="mt-2">
                    <Row className="mt-5"></Row>
                    <Row className="mt-5"></Row>
                    <h1 className="fs-1 mt-5">Catspace</h1>
                    <br/>
                    <p>It's kind of like Myspace®...but with <strong>cats!</strong><br/>
                    <br/>
                        Check out our furry feline friends below, <br/> then add your own to the litter!</p>
                    <Row className="mb-5"></Row>
                    <Row className="mb-5">
                        <Col>
                            <Button size="lg" href="#half">Get Started</Button>{' '}
                            <Button size="lg" href="/addacat">Add a cat!</Button>
                        </Col>
                    </Row>
                </Col>
                <Col className="mt-3">
                    <Image
                        src="https://www.fernvet.co.za/wp-content/uploads/2018/02/Cat-White-Background-Images.jpg"
                        alt="cat coming out of wall"
                        height={450}
                    />
                </Col>
            </Row>

            <Row className="bg-light border p-5"id="half">
                {addCatButton}
                {renderCats}
            </Row>
        </Container>
    );
}

export default Home;