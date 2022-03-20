import { Card, Col } from "react-bootstrap";
import JsonApi from "../services/json-api";
import { Post as PostInterface } from "../types/interfaces";
import { Link } from "react-router-dom";

const api = new JsonApi();

export const Post = (props: { post: PostInterface }) => {
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
        {props.post.user && (
          <Card.Subtitle className="text-muted">
            <span>Created by:</span>{" "}
            <span className="text-black">{props.post.user.name}</span>,{" "}
            <span>{props.post.user.email}</span>
          </Card.Subtitle>
        )}
      </Card.Body>
    </Card>
  );
};
