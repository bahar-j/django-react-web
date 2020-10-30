import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/header.css'
import Logo from '../images/logoTop.png';

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <Link to="/" className="logo"><img src={Logo} alt="logo" width='30%'></img></Link>
                <ul className="menu">
                    <li className="menu1"><Link to="/programs">진행중인 프로그램</Link>
                        <ul className="submenu submenu1">
                            <li><Link to="/programs">프로그램 소개</Link></li>
                            <li><Link to="/mento">멘토 풀 소개</Link></li>
                            <li><Link to="/story">멘토링 스토리</Link></li>
                            <li><Link to="/past">지난 멘토링 프로그램</Link></li>
                        </ul>
                    </li>
                    <li className="menu2"><Link to="/studies">사업 내용</Link>
                        <ul className="submenu submenu2">
                            <li><Link to="/studies">학술연구</Link></li>
                            <li><Link to="/plan">멘토링 기획 및 실행</Link></li>
                            <li><Link to="/about">회보의 발행</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/archive">멘토링 자료실</Link></li>
                    <li className="menu4"><Link to="/community">커뮤니티</Link>
                        <ul className="submenu submenu4">
                            <li><Link to="/community">공지사항</Link></li>
                            <li><Link to="/events">행사안내</Link></li>
                            <li><Link to="/news">멘토링 회보</Link></li>
                        </ul>
                    </li>
                    <li className="menu5"><Link to="/greeting">소개</Link>
                        <ul className="submenu submenu5">
                            <li><Link to="/greeting">인사말</Link></li>
                            <li><Link to="/foundation">설립취지</Link></li>
                            <li><Link to="/history">연혁</Link></li>
                            <li><Link to="/association">정관</Link></li>
                            <li><Link to="/funding">후원안내</Link></li>
                            <li><Link to="/group">운영조직</Link></li>
                            <li><Link to="/business">경영공시</Link></li>
                            <li><Link to="/map">오시는길</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Header;