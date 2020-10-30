import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../css/notice.css'
import '../css/community.css'

// 게시판 Detail 페이지
export default function PostDetail(props) {

    const postId = props.match.params.id;
    const board = props.match.params.board;
    let boardName = ''
    const [post, setPost] = useState([]);
    let downloadLink = '';

    if (board === '2'){
        boardName = 'community'
    }
    else if (board === '3'){
        boardName = 'events'
    }
    else if (board === '4'){
        boardName = 'business'
    }
    else if (board === '5'){
        boardName = 'archive'
    }
    else if (board === '6'){
        boardName = 'news'
    }

    useEffect(() => {
        const fetchData = async () => {
            // 현재 게시물의 데이터만 가져오기
            const {data} = await axios.get('api url'+postId);
            setPost(data)
        }
        fetchData();
        return;
    }, [postId]);

    const deletePost = () => {
        const deleteData = async () => {
            await axios.delete(`api url${postId}`)
        }
        deleteData();
    }

    const createDownload = () => {
        let link = post.document;
        const linkArr = link.split('domain');
        return linkArr[1]
    }

    return (
        <React.Fragment>
            <div className="title-container"><span className="notice-title">게시물</span></div>
            <div className="notice-detail">
                <ul>
                    <div style={{display: 'none'}}>
                    {post.document &&
                    (downloadLink = createDownload())
                    }</div>
                    <li>{post.title}</li>
                    {/* post.published가 undefined라서 slice할 수 없다는 에러 해결 */}
                    {post.published &&
                    <li>작성자: 관리자 / 작성일자: {post.published.slice(0,10)} / 조회: {post.n_hit}</li>
                    }
                    <li>
                        {/* 표는 안나옴 */}
                        <div dangerouslySetInnerHTML={{__html: post.content }} />
                        {/* <div><Link to ={"/" + downloadLink} target="_blank" download>파일 다운로드</Link></div> */}
                    </li>
                </ul>
            </div>
            <Link to={'/' + boardName} className="notice-btn detailBtn" ><span className="btnValue">목록</span></Link>
            {/* <Link to={'/' + boardName} className="notice-btn detailBtn" onClick={deletePost}><span className="btnValue">삭제</span></Link> */}
        </React.Fragment>
    )
}