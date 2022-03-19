import { Button, Card } from "react-bootstrap";
import JsonApi from "../services/json-api";
import { Post as PostInterface, Comment } from "../types/interfaces";
import { Link } from "react-router-dom";

interface PostProps {
  post: PostInterface;
}

const api = new JsonApi();

export const Post = (props: PostProps) => {
  return (
    <Card>
      <Card.Body className="p-4">
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>

        <Card.Link as={Link} to={`/posts/${props.post.id}`}>
          <span>See more</span>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
