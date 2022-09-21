import React from 'react';

import avatar from '../assets/avatar-generic.jpg';
import '../styles/Avatar.css';

const Avatar = ({ src, alt, size }) => {
  return <img 
        src={src ?? avatar}
        alt={alt ?? "avatar"}
        className="avatar"
        style={{height: size, width: size}}
    />

}

export default Avatar