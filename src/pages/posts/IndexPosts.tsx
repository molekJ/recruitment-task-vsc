import { Container, Col, Row } from "react-bootstrap";
import JsonApi from "../../services/json-api";
import { useState, useEffect } from "react";
import { Post as PostInterface } from "../../types/interfaces";
import { Post } from "../../components/Post";
import { PostForm } from "../../components/PostForm";
import { PaginationComponent } from "../../components/PaginationComponent";

const api = new JsonApi();

export const IndexPosts = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    Promise.all([api.posts(), api.users()]).then(([posts, users]) => {
      setPosts(
        posts.map((post) => ({
          ...post,
          user: users.find((user) => user.id === post.userId),
        }))
      );
    });
  }, []);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

  const totalPages = posts.length;

  return (
    <Container>
      <Row className="justify-content-center mb-3">
        <Col md={10}>
          <PostForm />
        </Col>
      </Row>
      {posts.length ? (
        <>
          {currentPosts.map((post) => (
            <Row key={post.id} className="justify-content-center">
              <Col md={10}>
                <Post post={post} />
              </Col>
            </Row>
          ))}
          <Row className="justify-content-center">
            <Col md={10}>
              <PaginationComponent
                pagination={{ currentPage, paginate, postsPerPage, totalPages }}
              />
            </Col>
          </Row>
        </>
      ) : (
        <Row className="justify-content-center">
          <Col md={10}>
            <span>Loading...</span>
          </Col>
        </Row>
      )}
    </Container>
  );
};
