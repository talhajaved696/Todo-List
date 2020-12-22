import React from 'react';

const TodoItem = ({tasks, deleteTodo, handleChange}) => {
    
    return(
        <>
        {tasks.map((task) => {
            return (<div key={task.id} className='person'>
            <input type="checkbox" name="todo" value="" onChange={() => handleChange(task.id)}/>
            <span className={task.complete ? 'label':''}> {task.title}</span>
            <button className="btn" onClick={() => 
              {deleteTodo(task.id)}}>X</button> 
          </div>)
        })}
        </>
    )
    
}

export default TodoItem;