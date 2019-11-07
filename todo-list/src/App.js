import React from 'react';
import './App.css';

import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>todo<span>list</span></h1>
        <h2>A simple single-page todo list app</h2>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
