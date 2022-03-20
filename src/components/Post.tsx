import { Button, Card, Col } from "react-bootstrap";
import JsonApi from "../services/json-api";
import { Post as PostInterface, Comment } from "../types/interfaces";
import { Link } from "react-router-dom";

interface PostProps {
  post: PostInterface;
}

const api = new JsonApi();

export const Post = (props: PostProps) => {
  return (
    <Card className="mb-3">
      <Card.Header className="p-4 fw-bold text-uppercase">
        {props.post.title}
      </Card.Header>
      <Card.Body className="p-4">
        <Card.Text>{props.post.body}</Card.Text>
        <Col className="d-flex justify-content-end">
          <Card.Link as={Link} to={`/posts/${props.post.id}`}>
            <span>See more</span>
          </Card.Link>
        </Col>
        <Card.Subtitle className="text-muted">
          <span>Created by:</span> <span>{props.post.userId}</span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
