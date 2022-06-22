import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from './features/userSlice';
import { auth } from './fire_base';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://image.flaticon.com/166/png/512/174/174857.png" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onClick={logoutOfApp} avatar="http://wikicraze.com/wp-content/uploads/2019/10/sad-boy-35-2.jpg" title="Me" />

            </div>

        </div>
    )
}

export default Header
