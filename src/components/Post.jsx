import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";


export const Post = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
        .then((res) => {
        setPosts(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);

  console.log(posts);

  const contents = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <header>
        <nav className='nav'>
          <h1>
            TEST POST APP
          </h1>
          <Link to="/" className='home'>home</Link>
          <Link to="/create" className='create'>create</Link>
        </nav>
      </header>

      <h2>
        {contents.title}
      </h2>
      <p>
        {contents.body}
      </p>

    </div>
  )
}

