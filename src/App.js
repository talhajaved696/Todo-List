import React, { useState, useEffect } from 'react';
import TodoItem from './Todo'
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  }else{
    return [];
  }

}
function App() {
  const [Todo, setTodo] = useState('')
  const [todoArray, setTodoArray] = useState(getLocalStorage())
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  }
  const addTodo = () => {
    const newTodo = {id: new Date().getTime().toString(),title:Todo, complete:false}
    setTodoArray([...todoArray, newTodo])
    setTodo('')
  }

  const deleteTodo = (id) => {
    setTodoArray(todoArray.filter((todo) => todo.id !== id))
  }
  const clearTodo = () => {
    setTodoArray([]);
  }
  const handleChange = (id) => {
      setTodoArray(todoArray.map((todo)=> {
        if (todo.id === id){
          return {...todo, complete:!todo.complete}
        }
        return todo
      }))
      
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoArray));
  }, [todoArray]);
  return (
    <main>
      <section className="container">
        <h3>React TODO List App</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={Todo} placeholder="Add Todo..." onChange={(e) => setTodo(e.target.value)}></input>
          <button type='submit' className='btn'>Add Task</button>
        </form>
        {todoArray.length > 0 && (<><TodoItem tasks={todoArray} deleteTodo={deleteTodo} handleChange={handleChange}/>
        <button className='clear-btn' onClick={clearTodo}>Clear All</button></>)
        }
        
      </section>
    </main>
  );
}

export default App;
