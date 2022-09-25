import React, { useEffect, useState } from "react";
import "./CreatePost.css";

import { useNavigate } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';

function CreatePost ({ isAuth }) {

  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  const navigator = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigator('/login');
    }
  }, []);

  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      article: article,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    });
    navigator('/');
  };

  return (
    <>
      <div className="createPostPage">
        <div className="postContainer">
          <h1>Post article</h1>
          <div className="inputPost">
            <div>Title</div>
            <input
              type="text"
              placeholder="Input title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputPost">
            <div>Article</div>
            <textarea
              placeholder="What are you doing?"
              onChange={(e) => {
                setArticle(e.target.value);
              }}
            />
          </div>
          <button
            className="postButton"
            onClick={createPost}
          >
            Post!
          </button>
        </div>
      </div>
    </>
  );
}

export default CreatePost;