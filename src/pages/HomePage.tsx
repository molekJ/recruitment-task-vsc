import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export const HomePage = () => {
  return (
    <Container className="page-home">
      <Row className="justify-content-center">
        <Col sm={8}>
          <Card className="home-page-card">
            <Card.Body
              as={Link}
              to="/posts"
              className="p-5 text-decoration-none text-info"
            >
              <Card.Text
                as="div"
                className="p-3 fs-2 text-black-50 text-center"
              >
                <Typewriter
                  options={{
                    strings: ["Hello there!", "How are you today? :)"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
