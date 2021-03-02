import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))|| [];
}
export const TodoApp = () => {
    const [todos,dispach] = useReducer(todoReducer, [],init);


    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const handleDelete=(todoId)=>{
        
    
        const action={
            type:'delete',
            payload:todoId
        }
        dispach(action);
    }

    const handleToogle =(todoId)=>{
        dispach({
            type:'toogle',
            payload: todoId
        })
    }

    const handleAddTodo=(newTodo)=>{
        
        dispach({
            type:'add',
            payload:newTodo
        });
    }
   

    return (
        <div>
            <h1>Todo APP ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleToogle={handleToogle} handleDelete={handleDelete}/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
