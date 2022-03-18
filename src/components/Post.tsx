import { Button } from "react-bootstrap";
import JsonApi from "../services/json-api";
import { Post as PostInterface, Comment } from "../types/interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PostProps {
  post: PostInterface;
}

const api = new JsonApi();

export const Post = (props: PostProps) => {
  return (
    <div>
      <Link to={`/posts/${props.post.id}`}>
        <span>{props.post.title}</span>
      </Link>
      {/* <Button onClick={onButtonClick}>show comments</Button> */}
    </div>
  );
};
