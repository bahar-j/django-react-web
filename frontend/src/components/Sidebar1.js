import React from 'react';
import '../css/sidebar1.css';
import { Link } from "react-router-dom";

const Sidebar1 = () => {

    return (
        <div className="sidebar-container">
            <ul className="sidebar">
                <Link to='/past'><li>멘토링 프로그램 소개</li></Link>
                <Link to='/paststory'><li>멘토링 스토리 2019</li></Link>
                <Link to='/pastmento'><li>2018-2019 멘토 풀 소개</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar1;