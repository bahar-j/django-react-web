import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import '../css/community.css'
import '../css/photo-forum.css'

// 게시판 테이블 중 header, 공지글
const PhotoForum = () => {
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [taskRows,setTaskRows] = useState([]);

  const renderTasks = () => {
    let filteredTasks = posts;
    let taskRows = filteredTasks.reduce(function (rows, task, i) {
      let rowIndex = Math.floor(i / 3);

      if (i % 3 === 0) {
        rows[rowIndex] = [task];
      } else {
        rows[rowIndex].push(task);
      }
      return rows;
    }, []);

    console.log(taskRows[0]);
    console.log(taskRows.length);
    setTaskRows(taskRows);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const { data } = await axios.get("api url");
      // 현재 게시판의 게시물만 가져오기 (자료실(5), 공지사항(2), 행사안내(3), 멘토링 회보(6), 경영공시(4))
      setPosts(
        data.filter((post) => post.board === 6)
      );
      // setLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    renderTasks();
  }, [posts]);

  // Change current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        { taskRows.map ((posts) => {
          return (<div className="news-container">
          {posts.map ((post) => {
              return(
              <Link to={"/postdetail/" + post.id + '/' + '6'}>
                  <div><img src={post.thumbnail} width="200vw" height="280vw" /><br />
                  <span className="photo-title">{post.title}</span>
                  </div>
              </Link>
              );
          })}
          </div>);
        })}
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
        paginate={paginate}
        boardName="news"
      />
    </div>
  );
};

export default PhotoForum;