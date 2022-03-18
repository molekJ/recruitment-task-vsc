import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/posts">Posts</Link>
        </Col>
      </Row>
    </Container>
  );
};
