import React, {useContext} from 'react';
import { Link } from 'react-router-dom'; 
import Btn1 from '../images/btn1.png';
import Btn2 from '../images/btn2.png';
import Btn3 from '../images/btn3.png';
import Btn4 from '../images/btn4.png';
import '../css/home.css';

export default function HomeScreen() {
    return (
        <React.Fragment>
            <div className="flex-container">
                <Link to='/programs'><img src={Btn1} alt="프로그램 소개" width="90%"/></Link>
                <Link to='/mento'><img src={Btn2} alt="멘토풀 소개" width="90%"/></Link>
            </div>
            <div className="flex-container">
                <Link to='/story'><img src={Btn3} alt="멘토링 스토리" width="90%"/></Link>
                <Link to='/archive'><img src={Btn4} alt="멘토링 자료실" width="90%"/></Link>
            </div>
        </React.Fragment>
    )
}