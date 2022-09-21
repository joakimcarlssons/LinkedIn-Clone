import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/InputOption.css';

const InputOption = ({ icon, title, color }) => {
  return (
    <div className='inputOption'>
        <FontAwesomeIcon icon={icon} style={{ color: color }} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption