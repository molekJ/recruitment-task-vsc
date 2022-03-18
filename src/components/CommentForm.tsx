import { useEffect, useState } from "react";
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
  const [error, setError] = useState("");

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
      setError(err.message);
    });
  };

  return (
    <div>
      <span>{error}</span>
      <label>
        <span>Name</span>
        <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        <span>Email</span>
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <label>
        <span>Body</span>
        <textarea name="body" value={form.body} onChange={handleChange} />
      </label>

      <button disabled={!isValid} onClick={onButtonClick}>
        Send
      </button>
    </div>
  );
};
