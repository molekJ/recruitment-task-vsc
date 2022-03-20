import { Post, Comment, User } from "../types/interfaces";

export default class JsonApi {
  private _url = "https://jsonplaceholder.typicode.com";

  /*
   * get posts
   */
  public posts(): Promise<Post[]> {
    return new Promise((res, rej) => {
      fetch(`${this._url}/posts`)
        .then((data) => {
          data
            .json()
            .then((posts) => res(posts))
            .catch((err) => rej(err));
        })
        .catch((err) => rej(err));
    });
  }

  /*
   * get single post
   */
  public post(postId: number): Promise<Post> {
    return new Promise((res, rej) => {
      fetch(`${this._url}/posts/${postId}`)
        .then((data) => {
          data
            .json()
            .then((post) => res(post))
            .catch((err) => rej(err));
        })
        .catch((err) => rej(err));
    });
  }

  /*
   * add post
   */
  public sendPost(post: Pick<Post, "title" | "body">) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(new Error("Demo version!"));
      }, 1000);
    });
  }

  /*
   * get comments to given postID
   */
  public comments(postId: number): Promise<Comment[]> {
    return new Promise((res, rej) => {
      fetch(`${this._url}/posts/${postId}/comments`)
        .then((data) => {
          data
            .json()
            .then((comments) => res(comments))
            .catch((err) => rej(err));
        })
        .catch((err) => rej(err));
    });
  }

  /*
   * add comment to post
   */
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
  public sendComment(
    postId: number,
    comment: Pick<Comment, "name" | "email" | "body">
  ) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej(new Error("Demo version."));
      }, 1000);
    });
  }

  /*
   * get users
   */
  public users(): Promise<User[]> {
    return new Promise((res, rej) => {
      fetch(`${this._url}/users`).then((data) => {
        data
          .json()
          .then((users) => res(users))
          .catch((err) => rej(err));
      });
    });
  }
}
