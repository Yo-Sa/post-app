import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";

import React, { useState } from 'react';
import { InputForm } from './components/InputForm';
import { PostList } from './components/PostList';
import { Home } from "./components/Home";
import { Create } from './components/Create';

function App() {

  const [postList, setPostList] = useState([]);

  // const [data, setData] = useState({ title: "", body: "" });

  // const handleChange = (e) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  
  // const [addText, setAddText] = useState("");
  
  // const onClickAddText = () => {
  //   setAddText(data.body);
  //   setData("");
  // }

  return (

    // <BrowserRouter>

    //     <div className="App">

    //       <Route path='/create' Create={Create}/>
          
    //     </div>
    // </BrowserRouter>
          <div className="App">
          
            <h1>TEST POST APP</h1>
            <p>Home</p>
  
            <InputForm postList={postList} setPostList={setPostList}/>
            <PostList postList={postList} setPostList={setPostList}/>

          </div>
        
        
        /* <div>
          <Create /><hr/>
          <Route exact path='/' component={App}/>
          <Route path='/Create' component={Create}/>
        </div> */



        /* <label>Title:</label>
        <input type="text" name='title' onChange={handleChange}/>

        <label>Body:</label>
        <input type="text" name='body' onChange={handleChange}/>
        <button onClick={onClickAddText}>追加</button>

        <p>ボタンクリック：{addText}</p>



        <br />
        title: {data.title}
        <br />
        body: {data.body} */

        /* <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Title"/>
        <input value={body} onChange={(event) => setBody(event.target.value)} placeholder="Body"/>
        <button onClick={onClickAddText}>追加</button> */
        
        
        /* <p>Title:{text}</p>
        <p>Body:{body}</p> */

  );
}

export default App;
