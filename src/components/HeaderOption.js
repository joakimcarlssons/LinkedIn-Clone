import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/HeaderOption.css';

const HeaderOption = ({ avatar, icon, title, handleClick }) => {
  return (
    <div className="headerOption" onClick={handleClick}>
        {icon && <FontAwesomeIcon icon={icon} className="headerOption__icon" />}
        {avatar && avatar}

        <h3 className='headerOption__title'>{ title }</h3>
    </div>
  )
}

export default HeaderOption