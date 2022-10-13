import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";


export const Post = () => {
  const {id} = useParams();
  // console.log(id);
  const [post, setPost] = useState([]);
  

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await fetch(
  //       `http://localhost:8000/api/posts/${id}`
  //     );
  //     const data = await res.json();
  //     setPost(data);
  //   };
  //   fetchPost();
  // }, [id]);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/`)
        .then((res) => {
        setPost(res.data);
        })
        .catch((err) => {
        console.log(err);
        });
    }, []);
  console.log(post);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/posts/`)
//     .then(res => {
//         setPosts(res.data)
//     })
// }, [])

  // console.log(posts[0]);

//   const listPosts = posts.map((post) => {
//     return (
//         <div>
//           {post.id}
//         </div>
//     );
// });



  // const post = posts.find((post) => post.id === Number(id));

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
          <p>TITLE:{post.title}</p>
      </div>


    </div>
  )
}

