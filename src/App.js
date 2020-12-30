import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input.jsx';
import Task from './components/Task.jsx';
import './App.css';


function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list}/>
      ))} 

      <Input list = {list} setList={setList} />
    </div>
  );
}

export default App;
