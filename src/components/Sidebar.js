import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../features/userSlice';
import Avatar from './Avatar';
import '../styles/Sidebar.css';
import avatar from '../assets/jc_icecream.jpg';

const Sidebar = () => {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        );

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1548195667-1d329af0a472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="sidebar-avatar-bg" />
            <Avatar src={user.photoUrl} alt="avatar-sidebar" size="50px" className="sidebar__avatar" />
            <h2>{user.displayName}</h2>
            <h4>Fullstack Developer</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Visitors</p>
                <p className="sidebar__statNumber">47</p>
            </div>
            <div className="sidebar__stat">
                <p>Contacts</p>
                <p className="sidebar__statNumber">225</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('development')}
            {recentItem('fullstack')}
            {recentItem('dotnet')}
        </div>
    </div>
  )
}

export default Sidebar