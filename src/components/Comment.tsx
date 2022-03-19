import { Card, Container, Row, Col } from "react-bootstrap";
import { Comment as CommentInterface } from "../types/interfaces";

const Comment = (props: { comment: CommentInterface }) => {
  return (
    <Card className="border-0 border-bottom">
      <Card.Body>
        <Row>
          <Col xs={4}>
            <Card.Text>{props.comment.email}</Card.Text>
          </Col>
          <Col xs={8}>
            <Card.Title>{props.comment.name}</Card.Title>
            <Card.Text>{props.comment.body}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Comment;
