import React from 'react';
import { Link } from 'react-router-dom';
import Forum from '../components/Forum.js';
import '../css/community.css'

export default function CommunityScreen() {

    return (
        <React.Fragment>
            {/* <Link to={'/create/2'} className="notice-btn"><span className="btnValue">글쓰기</span></Link> */}
            <div className="title-container"><span className="notice-title">공지사항</span></div>
            <Forum />
        </React.Fragment>
    )
}