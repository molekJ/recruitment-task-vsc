import { useEffect, useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import JsonApi from "../services/json-api";
import { Post } from "../types/interfaces";

const api = new JsonApi();

export const CommentForm = (props: { post: Post }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Boolean(form.name && form.email && form.body));
  }, [form]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onButtonClick = () => {
    api.sendComment(props.post.id, form).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <Form className="mt-3">
      <Card>
        <Card.Header>Add comment</Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" as={Row} controlId="emailAdress">
            <Col>
              <Form.Label sm={2}>Email adress</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="email@exmaple.com"
                name="email"
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" as={Row} controlId="name">
            <Col>
              <Form.Label sm={2}>Name</Form.Label>
            </Col>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Title exmaple"
                name="name"
                onChange={handleChange}
                size="sm"
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="body">
            <Form.Label>Your comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="body"
              onChange={handleChange}
              size="sm"
            ></Form.Control>
          </Form.Group>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button disabled={!isValid} onClick={onButtonClick}>
            Send
          </Button>
        </Card.Footer>
      </Card>
    </Form>
  );
};
