import React from 'react';
import '../css/sidebar1.css';
import { Link } from "react-router-dom";

const Sidebar2 = () => {

    return (
        <div className="sidebar-container" style={{marginTop: '-3.5vw', marginBottom: '4vw'}}>
            <ul className="sidebar" style={{width: '80%', marginLeft: '16yvw'}}>
                <Link to='#'><li style={{width: '20%', textAlign: 'center'}}>전체</li></Link>
                <Link to='#'><li style={{width: '20%', textAlign: 'center'}}>교육</li></Link>
                <Link to='#'><li style={{width: '20%', textAlign: 'center'}}>홍보</li></Link>
                <Link to='#'><li style={{width: '20%', textAlign: 'center'}}>행사·활동</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar2;