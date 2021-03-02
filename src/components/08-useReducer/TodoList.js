import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToogle}) => {
    return (

            <ul>{
                todos.map((todo,i)=>(
                    <TodoListItem key={todo.id} todo={todo} indice={i} handleDelete={handleDelete} handleToogle={handleToogle}/>
                ))
                }
                
            </ul>
            
    )
}
