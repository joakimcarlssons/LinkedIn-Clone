import React, { useEffect, useState } from 'react';
import { faImage, faPlayCircle, faCalendarAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

import { selectUser } from '../features/userSlice';
import '../styles/Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import Avatar from './Avatar';
import { db } from '../firebase';

const Feed = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);
  
    useEffect(() => {
        // Set up real time listener on firebase DB
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
        ));
    }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
        name: user.displayName ?? '<Deleted User>',
        description: user.description ?? 'Fullstack Developer',
        message: input ?? '',
        photoUrl: user.photoUrl ?? '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Avatar src={user.photoUrl} size="40px" />
                <form>
                    <input type="text" placeholder='Write something' value={input} onChange={e => setInput(e.target.value)} />
                    <button type='submit' onClick={e => sendPost(e)}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                {/* Input Options */}
                <InputOption icon={faImage} title="Photo" color="#70B5F9" />
                <InputOption icon={faPlayCircle} title="Video" color="#5F9B41" />
                <InputOption icon={faCalendarAlt} title="Event" color="#C37D16" />
                <InputOption icon={faNewspaper} title="Write article" color="#E16745" />
            </div>
        </div>

        <div className="feed__divider" />

        {/* Posts */}
        <FlipMove>
            {posts?.map(({ id, data: { name, description, message, photoUrl, timestamp } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    timestamp={timestamp}
                />
            ))}
        </FlipMove>

    </div>
  )
}

export default Feed