import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {auth, db} from '../firebase'
import './Home.css';

function Home () {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      const articlesToSet = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArticles(articlesToSet);
    };
    getPosts();
  }, []);

  useEffect(() => {
    console.error({ articles });
  }, [articles]);

  const deleteArticle = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/';
  };

  return (
    <div className="homePage">
      {
        articles.map((article, index) => {
          return (
            <div className="postContents" key={index}>
              <div className="postHeader">
                <h1>{ article.title }</h1>
              </div>
              <div className="postTextContainer">
                { article.article }
              </div>
              <div className="nameAndDeleteButton">
                <h3>{ article.author.name }</h3>
                {
                  article.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deleteArticle(article.id)
                      }}
                    >
                      Delete
                    </button>
                  )
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Home;