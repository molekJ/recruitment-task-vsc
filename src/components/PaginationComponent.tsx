import { Pagination } from "react-bootstrap";
import { PaginationInterface } from "../types/interfaces";

export const PaginationComponent = (props: {
  pagination: PaginationInterface;
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.pagination.totalPages / props.pagination.postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className="justify-content-center">
      <Pagination.First
        disabled={props.pagination.currentPage === 1}
        onClick={() => {
          props.pagination.paginate(1);
        }}
      />
      <Pagination.Prev
        disabled={props.pagination.currentPage === 1}
        onClick={() => {
          props.pagination.paginate(props.pagination.currentPage - 1);
        }}
      />
      {pageNumbers.map((number) => {
        return (
          <Pagination.Item
            active={number === props.pagination.currentPage}
            key={number}
            onClick={() => {
              props.pagination.paginate(number);
            }}
          >
            {number}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        disabled={props.pagination.currentPage === pageNumbers.length}
        onClick={() => {
          props.pagination.paginate(props.pagination.currentPage + 1);
        }}
      />
      <Pagination.Last
        disabled={props.pagination.currentPage === pageNumbers.length}
        onClick={() => {
          props.pagination.paginate(pageNumbers.length);
        }}
      />
    </Pagination>
  );
};
