import { Button } from "react-bootstrap";
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
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
