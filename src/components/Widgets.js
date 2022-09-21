import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import '../styles/Widgets.css';
import Avatar from './Avatar';

const Widgets = () => {
 const proposal = (name, title) => (
    <div className="widgets__proposal">
        <div className="widgets__proposalLeft">
            <Avatar size="35px" />
        </div>
        <div className="widgets__proposalRight">
            <h4>{name}</h4>
            <p>{title}</p>
            <button>+ Follow</button>
        </div>
    </div>   
 )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Add to flow</h2>
            <FontAwesomeIcon icon={faCircleInfo} />
        </div>

        {proposal("Kevin Liang", "Sr. UX Researcher @ Company")}
        {proposal("Martha Stewart", "Author and mother")}
        {proposal("Ben Stewart", "Frontend engineer @ Google")}
        {proposal("Blanca Vlasic", "Olypmic athlete")}
        {proposal("Steve Jobs", "Founder & CEO @ Apple")}
    </div>
  )
}

export default Widgets