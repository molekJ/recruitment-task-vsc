import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonApi from "../../services/json-api";
import {
  Post as PostInterface,
  Comment as CommentInterface,
} from "../../types/interfaces";
import { CommentForm } from "../../components/CommentForm";
import { Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import { Comment } from "../../components/Comment";
import { AvatarGenerator } from "random-avatar-generator";

const api = new JsonApi();
const generator = new AvatarGenerator();

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
    <Container className="page-single-post">
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card className="p-4 mb-3">
            <Row>
              <Col sm={3} md={2} className="d-flex justify-content-center">
                <img
                  src={generator.generateRandomAvatar(post.userId.toString())}
                />
              </Col>
              <Col>
                <Card.Body className="mb-4">
                  <Card.Title className="pb-4 fw-bold text-uppercase">
                    {post.title}
                  </Card.Title>
                  <Card.Text className="pb-4">{post.body}</Card.Text>
                  <Card.Subtitle className="text-muted ">
                    <span>Added:</span>{" "}
                    <span>{new Date().toLocaleDateString()}</span>
                  </Card.Subtitle>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12}>
          <Card className="post-comments">
            <Card.Header>Comments ({comments.length}): </Card.Header>
            <Card.Body>
              <CardGroup className="flex-column">
                {comments.map((comment) => {
                  return <Comment key={comment.id} comment={comment} />;
                })}
              </CardGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
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
