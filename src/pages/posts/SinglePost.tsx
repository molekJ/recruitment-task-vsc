import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonApi from "../../services/json-api";
import {
  Post as PostInterface,
  Comment as CommentInterface,
} from "../../types/interfaces";
import { CommentForm } from "../../components/CommentForm";
import { Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import Comment from "../../components/Comment";

const api = new JsonApi();

export const SinglePost = () => {
  const params = useParams();

  const [post, setPost] = useState<PostInterface>();
  const [comments, setComments] = useState<CommentInterface[]>([]);

  useEffect(() => {
    const id = Number(params.id);

    api.post(id).then((data) => {
      setPost(data);
    });
    api.comments(id).then((data) => {
      setComments(data);
    });
  }, []);

  return post ? (
    <Container>
      <Row className="justify-content-center">
        <Col sm={10}>
          <Card className="p-4 mb-4">
            <Card.Title className="p-4">{post.title}</Card.Title>
            <Card.Text className="p-4">{post.body}</Card.Text>
          </Card>
        </Col>

        <Col xs={10}>
          <CardGroup className="flex-column ">
            {comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}
          </CardGroup>
        </Col>

        <Col xs={10}>
          <CommentForm post={post} />
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>
        <Col>
          <h2>Loading...</h2>
        </Col>
      </Row>
    </Container>
  );
};
