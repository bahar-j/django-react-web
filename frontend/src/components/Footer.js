import React, {useContext} from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom'; 
import Logo from '../images/logoBottom.png';

const Footer = () => {

    return (
        <React.Fragment>
            <div className="sub-link">
                <ul>
                    <Link to='/greeting'><li>인사말</li></Link>
                    <Link to='/foundation'><li>설립취지</li></Link>
                    <Link to='/history'><li>연혁</li></Link>
                    <Link to='/association'><li>정관</li></Link>
                    <Link to='/funding'><li>후원안내</li></Link>
                    <Link to='/group'><li>운영조직</li></Link>
                    <Link to='/business'><li>경영공시</li></Link>
                    <Link to='/map'><li>오시는길</li></Link>
                    <Link to='/under'><li>관리자 로그인</li></Link>
                </ul>
            </div>
            <div className="footer">
                
                <img src={Logo} alt="logo" className="logo-btm"/>
            </div>
        </React.Fragment>
    )
}

export default Footer;