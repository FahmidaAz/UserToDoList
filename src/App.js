import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  return (
    
    <div className="App">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </head>
      <ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link active" ariaCurrent="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
      <header className="App-header">
       <Welcome></Welcome>
       <ToDo></ToDo>
      </header>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </div>
  );
  
}
function Welcome(){
  return(
    <div>
      <h1>Welcome to Employee's toDo list</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iusto fuga expedita quisquam iure necessitatibus debitis neque laboriosam numquam, aut, ea nam! Eum enim reiciendis a vel nam, earum officiis.</p>
    </div>
  );
}
function ToDo(){
  const listStyle={
    color: 'Grey',
    backgroundColor: 'Black',
    border: '2px solid grey',
    padding: '10px',
    width:'350px',
    height: '200px',

  }
  const [list, setList] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setList(data),[])
  })
  return(
    <div>
     <h1>Lists number: {list.length}</h1>
      
        {
          list.map(list => (
            <div style={listStyle}>
            Id: {list.userId}
            Title: {list.title}
            Completed Status: {list.completed}
            </div>
          ))}
      
    </div>
  )
}

export default App;
