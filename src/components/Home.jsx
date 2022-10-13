import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import Create from "./Create";



export const Home = () => {
    
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
    const listPosts = posts.map((post,index) => {
        return (
            <div key={index}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
        );
    });
    
    
    return (
        <div>
            <header>
                <div>
                    <h1 className="title" >Home</h1>
                </div>
                <nav className='nav'>
                    <Link to="/" className='home'>home</Link>
                    <Link to="/create" className='create'>create</Link>
                </nav>
            </header>
            <div className="list">
                <h2>PostList</h2>
                {listPosts}
            </div>
        </div>
    )
}

