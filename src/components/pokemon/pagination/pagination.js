import React from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css"; 

const Pagination = ({ pageCount, onPageChange, forcePage }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={forcePage}
      containerClassName={"pagination"}
      activeClassName={"active"}
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageActive={"page-active"}
    />
  );
};

export default Pagination;
