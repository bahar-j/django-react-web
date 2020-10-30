import React from "react";
import { Link } from "react-router-dom";

// 게시판 테이블 중 일반 글
const Posts = ({ posts, loading, totalPosts, currentPage, postsPerPage }) => {
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

  let lastId = totalPosts - postsPerPage * (currentPage - 1) + 1;

  const generateId = () => {
    lastId--;
    return lastId;
  };
  return (
    <React.Fragment>
        {posts.map((post) => (
            <tr key={post.id}><td>{generateId()}</td><td className="long"><Link to={'/postdetail/' + post.id + '/' + post.board}>{post.title}</Link></td><td>관리자</td><td>{post.published.slice(0,10)}</td><td>{post.n_hit}</td></tr>
        ))}
    </React.Fragment>
  );
};

export default Posts;
