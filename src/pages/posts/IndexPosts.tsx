import { Button, Container, Col, Row } from "react-bootstrap";
import JsonApi from "../../services/json-api";
import { useState, useEffect } from "react";
import { Post as PostInterface } from "../../types/interfaces";
import { Post } from "../../components/Post";

const api = new JsonApi();

export const IndexPosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    api.posts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Container className="justify-content-center">
      {posts.map((post) => (
        <Row key={post.id} className="justify-content-center">
          <Col md={10}>
            <Post post={post} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};
