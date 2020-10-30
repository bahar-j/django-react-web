import React from "react";
import { Link } from "react-router-dom";
import '../css/community.css'

// 게시판 하단 페이지네이션 넘버링 부분
const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate, boardName }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="numbering">
          {currentPage - 1 >= 1 ?
          <li><Link to={"/" + boardName} onClick={() => paginate(currentPage-1)}>&lt;</Link></li>
          :
          <li><Link to={"/" + boardName}>&lt;</Link></li>
          }
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link to={"/" + boardName} onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
        {currentPage + 1 <= Math.ceil(totalPosts / postsPerPage) ?
          <li><Link to={"/" + boardName} onClick={() => paginate(currentPage+1)}>&gt;</Link></li>
          :
          <li><Link to={"/" + boardName}>&gt;</Link></li>
          }
      </ul>
    </nav>
  );
};

export default Pagination;
