export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user?: User;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PaginationInterface {
  postsPerPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}
