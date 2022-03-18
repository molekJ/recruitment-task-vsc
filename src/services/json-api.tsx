import { Post, Comment } from "../types/interfaces";

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
   * send comment to post
   */

  public sendComment(
    postId: number,
    comment: Pick<Comment, "name" | "email" | "body">
  ) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(comment);
        rej(new Error("Demo version."));
      }, 1000);
    });
  }
}
