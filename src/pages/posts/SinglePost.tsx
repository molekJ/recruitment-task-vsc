import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JsonApi from "../../services/json-api";
import { Post, Comment } from "../../types/interfaces";
import { CommentForm } from "../../components/CommentForm";

const api = new JsonApi();

export const SinglePost = () => {
  const params = useParams();

  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);

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
    <div>
      <div>{post.body}</div>
      <div>{comments.length}</div>
      <CommentForm post={post} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
