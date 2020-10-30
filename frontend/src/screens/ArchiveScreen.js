import React from 'react';
import { Link } from 'react-router-dom';
import PhotoForum from '../components/PhotoForum2.js';
import '../css/community.css'
import Sidebar from '../components/Sidebar2.js';

export default function ArchiveScreen() {

    return (
        <React.Fragment>
            {/* <Link to={'/create/5'} className="notice-btn"><span className="btnValue">글쓰기</span></Link> */}
            <div className="title-container"><span className="notice-title">멘토링 자료실</span></div>
            <Sidebar />
            <PhotoForum />
        </React.Fragment>
    )
}