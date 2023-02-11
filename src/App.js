import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <div className="App">

      <header className="App-header">

        <h2 style={{marginTop:"70px"}}>Todo List App in Redux</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex",marginBottom:"50px" }}>
          <input placeholder='Enter a todo' className='input1'
            onChange={(e) => setTodo(e.target.value)} />
          <button type='submit' className='btnGo'>Go</button>
        </form>
        <ul className='allTodos'>
          {todos &&
            todos.map((t) => (

              <li key={t.id} className='singleTodo'>
                <span>{t.todo}</span>
                <button onClick={() => removeHandler(t)} className='deleteBtn'>Delete</button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
