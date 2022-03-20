import { Card, Row, Col } from "react-bootstrap";
import { Comment as CommentInterface } from "../types/interfaces";
import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

export const Comment = (props: { comment: CommentInterface }) => {
  return (
    <Card className="comment-component">
      <Card.Body>
        <Row>
          <Col xs={2} md={1}>
            <img src={generator.generateRandomAvatar(props.comment.email)} />
          </Col>
          <Col>
            <Card.Title>{props.comment.name}</Card.Title>
            <Card.Text>{props.comment.body}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
