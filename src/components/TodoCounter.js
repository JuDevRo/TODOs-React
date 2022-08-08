import React from 'react'
import { TodoContext } from './hooks/Context';
import '../styles/TodoCounter.css'

const TodoCounter = () => {
  const {totalTodos, completedTodos} = React.useContext(TodoContext)

    //const {total, completed} = props

    return (
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
  }

export {TodoCounter}