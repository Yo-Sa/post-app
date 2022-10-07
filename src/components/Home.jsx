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
    const listPosts = posts.map((post) => {
        return (
            <div>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
        );
    });
    
    
    return (
        <div>
            <header>
                <nav className='nav'>
                    <Link to="/" className='home'>home</Link>
                    <Link to="/create" className='create'>create</Link>
                    <h1>Home</h1>
                </nav>
            </header>
            <h2>一覧</h2>
            {listPosts}
            <div>
                {/* <Create /> */}
            </div>
            
        </div>
    )
}

