import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import '../css/community.css'

const Forum = (props) => {
  const [posts, setPosts] = useState([]);
  const [notices, setNotice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data } = await axios.get("api url");
      console.log(data);
      setPosts(
        data.filter((post) => post.board === 2 && post.isNotice === false)
      );
      setNotice(
        data.filter((notice) => notice.board === 2 && notice.isNotice === true)
      );

      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="notice-table">
        <tbody>
          <tr>
            <td>번호</td><td>제목</td><td>작성자</td><td>작성일자</td><td>조회수</td>
          </tr>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td><span className="important">공지</span></td><td className="long bold"><Link to={"/postdetail/" + notice.id +'/' + notice.board}>{notice.title}</Link></td>
              <td>관리자</td><td>{notice.published.slice(0, 10)}</td><td>{notice.n_hit}</td>
            </tr>
          ))}
          <Posts
            posts={currentPosts}
            loading={loading}
            totalPosts={posts.length}
            currentPage={currentPage}
            postsPerPage={postsPerPage}
          />
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
        boardName="community"
      />
    </div>
  );
};

export default Forum;
