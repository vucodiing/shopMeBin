import React from "react";
function Search({ search }) {
  return (
    search && <input id="gr-search" type="text" placeholder="Bạn cần tìm gì?" />
  );
}
export default Search;
