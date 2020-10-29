import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
Pagination.prototype = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
};
export default function Pagination(props) {
  const { pagination, onPageChange } = props;
  const {_limit} = pagination;
  const pageNumber=[];
  const totalPages = Math.ceil(props.count / _limit)

  for (let i =0; i <= totalPages; i++){
    pageNumber.push(i)
  }
console.log(pageNumber)
  function handlePageChange(newPage){
    if(onPageChange){
      onPageChange(newPage)
    }
  }
  return (
    <div>
      {pageNumber.map((number) => (
        // <button key={number} onClick={() => handlePageChange(number)}>{number}</button>
        <Button variant="primary" key={number} onClick={() => handlePageChange(number)}>{number}</Button>
      ))}
   </div>
  );
}
