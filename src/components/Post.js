import React, { forwardRef } from 'react';
import { faThumbsUp, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import { selectUser } from '../features/userSlice';
import '../styles/Post.css';
import Avatar from './Avatar';
import InputOption from './InputOption';

const Post = forwardRef(({ name, description, message, timestamp, photoUrl }, ref) => {

    const user = useSelector(selectUser);

  return (
    <div className='post'>
        <div className="post__header">
            <Avatar src={photoUrl || null} size="50px" />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
                {timestamp ? <p>{new Date(timestamp.seconds * 1000).toLocaleDateString() } { new Date(timestamp.seconds * 1000).toLocaleTimeString()}</p> : ''}
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <Avatar src={user.photoUrl} size="20px" />
            <InputOption icon={faThumbsUp} title="Like" color="gray" />
            <InputOption icon={faMessage} title="Comment" color="gray" />
            <InputOption icon={faShare} title="Share" color="gray" />
            <InputOption icon={faPaperPlane} title="Send" color="gray" />
        </div>
    </div>
  )
})

export default Post