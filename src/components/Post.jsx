import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { useGetPosts } from "../hooks/useGetPosts";

export const Post = () => {
  const {id} = useParams();
  // console.log(id);
  // const {posts} = useGetPosts();


  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/${id}`)
        .then((res) => {
        setPosts(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, [id]);
  console.log(posts);

  return (
    <div>
      <header>
        <div>
            <h1 className="title">Post</h1>
        </div>
          <nav className='nav'>
              <Link to="/" className='home'>home</Link>
              <Link to="/create" className='create'>create</Link>
          </nav>
      </header>
      <div className="list">
        <h2>PostList</h2>
          {/* <p>ID:{id}</p> */}
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
          <p>{posts.created_at}</p>
      </div>


    </div>
  )
}

