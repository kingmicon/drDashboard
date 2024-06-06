import React, {useState} from 'react'
import Logo from "../images/TestLogo.jpg"
import Menu1 from "../images/home_FILL0_wght300_GRAD0_opsz24.jpg"
import Menu2 from "../images/group_FILL0_wght300_GRAD0_opsz24.jpg"
import Menu3 from "../images/calendar_today_FILL0_wght300_GRAD0_opsz24.jpg"
import Menu4 from "../images/chat_bubble_FILL0_wght300_GRAD0_opsz24.jpg"
import Menu5 from "../images/credit_card_FILL0_wght300_GRAD0_opsz24.jpg"
import Profile1 from "../images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
import Settings from "../images/settings_FILL0_wght300_GRAD0_opsz24.jpg"
import Dots from "../images/more_vert_FILL0_wght300_GRAD0_opsz24.jpg"

const Header = () => {

    const [activeItem, setActiveItem] = useState('Patients');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };
  return (
    <div className = "nav-bar">
        <div className = "nav-bar1">
            <div className = "nav-bar-logo">
                <img src={Logo} alt= "logo" />
            </div>
            <div className = "nav-bar-menu">
                <ul>
                    <li className={activeItem === 'Overview' ? 'active' : ''} onClick={() => handleItemClick('Overview')}>
                        <img src={Menu1} alt="home"/>
                        <h6>Overview</h6>
                    </li>
                    <li className={activeItem === 'Patients' ? 'active' : ''} onClick={() => handleItemClick('Patients')}>
                        <img src={Menu2} alt="home"/>
                        <h6>Patients</h6>
                    </li>
                    <li className={activeItem === 'Schedule' ? 'active' : ''} onClick={() => handleItemClick('Schedule')}>
                        <img src={Menu3} alt="home"/>
                        <h6>Schedule</h6>
                    </li>
                    <li className={activeItem === 'Message' ? 'active' : ''} onClick={() => handleItemClick('Message')}>
                        <img src={Menu4} alt="home"/>
                        <h6>Message</h6>
                    </li>
                    <li className={activeItem === 'Transactions' ? 'active' : ''} onClick={() => handleItemClick('Transactions')}>
                        <img src={Menu5} alt="home"/>
                        <h6>Transactions</h6>
                    </li>
                </ul>
            </div>
            <div className = "nav-bar-profile">
                <img src={Profile1} alt="profile" />
                <div className = "nav-bar-profile-text">
                    <h5> Dr, Jose Simmons </h5>
                    <h6> General Practioner </h6>
                </div>
                <button className="nav-bar-settings">
                    <img src={Settings} alt="settings"/>
                </button>
                <button className="nav-bar-dots">
                    <img src={Dots} alt="dots"/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header