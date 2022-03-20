import { Row, Col, Form, Card, Button, Accordion } from "react-bootstrap";
import JsonApi from "../services/json-api";
import React, { useEffect, useState } from "react";

const api = new JsonApi();

export const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Boolean(post.title && post.body));
  }, [post]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onButtonClick = () => {
    api.sendPost(post).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Create Your post</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Card>
              <Card.Body>
                <Form.Group className="mb-3" as={Row} controlId="title">
                  <Col>
                    <Form.Label sm={2}>Post title</Form.Label>
                  </Col>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Title example"
                      name="title"
                      size="sm"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group controlId="body">
                  <Col>
                    <Form.Label>Text</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="body"
                      type="text"
                      size="sm"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <Button disabled={!isValid} onClick={onButtonClick}>
                  Send
                </Button>
              </Card.Footer>
            </Card>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
