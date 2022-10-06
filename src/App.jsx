import './App.css';
import { Routes, Route } from "react-router-dom";

// import { InputForm } from './components/InputForm';
// import { PostList } from './components/PostList';
import { Home } from "./components/Home";
import { Create } from './components/Create';

function App() {
  
  return (
    
    <div className="App">

      {/* 画面遷移の記述 */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
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
