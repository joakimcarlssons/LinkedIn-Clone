import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHouse, faPeopleGroup, faSuitcase, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';

import '../styles/Header.css';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';
import HeaderOption from './HeaderOption';
import avatar from '../assets/jc_icecream.jpg';
import Avatar from './Avatar';

const Header = () => {
  const dispatch = useDispatch();
  const handleAvatarClick = () => {
    dispatch(logout());
    auth.signOut();
  }

  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__wrapper">

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin-logo" />
            <div className="header__search">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='Search' />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption icon={faHouse} title="Home" />
            <HeaderOption icon={faPeopleGroup} title="My Network" />
            <HeaderOption icon={faSuitcase} title="Jobs" />
            <HeaderOption icon={faMessage} title="Messaging" />
            <HeaderOption icon={faBell} title="Notifications" />
            <HeaderOption avatar={<Avatar src={user.photoUrl} alt="avatar-header" size="20px" />} title="Me" handleClick={handleAvatarClick} />
        </div>         
      </div>
    </div>
  )
}

export default Header