import { useState, useEffect } from 'react';
import axios from "axios";

export const useGetPosts = () => {

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
    return (
        {posts}
    )
}
