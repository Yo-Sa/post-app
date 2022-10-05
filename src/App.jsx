import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import axios from "axios";

import { InputForm } from './components/InputForm';
import { PostList } from './components/PostList';
import { Home } from "./components/Home";
import { Create } from './components/Create';

function App() {

  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [isPost, setIsPost] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, [isPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post(
        "http://localhost:8000/api/posts",
        { title }
        // { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setIsPost(true);
        setTitle("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(isPost);



  const dataList = data.map((item) => {
    return (
      <>
        <p>{item.title}</p>
      </>
    );
  });

  return (
    <div className="App">

      {/* 画面遷移の記述 */}
      {/* <Link to="/">home</Link>
      <Link to="/create">create</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes> */}
      
      {/* API連携の記述 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {dataList}
    </div>
  );
  // const [postList, setPostList] = useState([]);
  //         <div className="App">
          
  //           <h1>TEST POST APP</h1>
  //           <p>Home</p>
  
  //           <InputForm postList={postList} setPostList={setPostList}/>
  //           <PostList postList={postList} setPostList={setPostList}/>

  //         </div>
}

export default App;
