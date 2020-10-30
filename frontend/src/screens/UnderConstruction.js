import React from 'react';
import '../css/under-construction.css'
import Hourglass from '../images/hourglass.png'

export default function HomeScreen() {
    return (
        <div className="construction">
            <img src={Hourglass} alt='loading' width='8%'/><br /><br />
            <span className="color-cstr"><span className="color-now">현재 페이지</span>는 <span className="color-ready">준비중</span>입니다.<br /></span>
            <div className="cstr-desc">이용에 불편을 드려 죄송합니다.<br />
            빠른 시일 내에 찾아뵙도록 하겠습니다.</div>
        </div>
    )
}