import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  const totalPages = Math.ceil(props.count.length / _limit)

  for (let i =1; i <= totalPages; i++){
    pageNumber.push(i)
    console.log(pageNumber)
  }
  

  function handlePageChange(newPage){
    if(onPageChange){
      onPageChange(newPage)
    }
  }
  return (
    <div className="button-pagination">
      {pageNumber.map((number) => (
        // <button className="button-link" key={number} onClick={() => handlePageChange(number)}>{number}</button>
        // <Button variant="primary" key={number} onClick={() => handlePageChange(number)}>{number}</Button>
        <div className="button-link" onClick={() => handlePageChange(number)} ><Link to="#"  key={number} >{number}</Link></div>
      //  <div className="button-link" onClick={() => handlePageChange(number)}><input  value ={number}  disabled /></div> 
      ))}
   </div>
  );
}
