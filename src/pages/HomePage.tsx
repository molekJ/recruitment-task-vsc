import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <Container className="page-home d-flex justify-content-center mb-4">
      <Row>
        <Col>
          <Card className="gradient-custom ">
            <Card.Body
              as={Link}
              to="/posts"
              className="p-5 text-decoration-none  text-info"
            >
              <Card.Title className="p-3 fw-bold text-uppercase">
                Welcome
              </Card.Title>
              <Card.Text className="p-3 ">
                Click on this card to see posts
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
