import React from 'react'
import {TodoContext} from './hooks/Context'
import '../styles/TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodos,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange  = (event) => {
        setNewTodoValue(event.target.value)
    }

    const onCancel  = () => {
        setOpenModal(false)
    }

    const onSubmit  = (event) => {
        event.preventDefault();
        addTodos(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar la cebolla para el almuerzo'
            />
            <div>
                <button onClick={onCancel} type='button'>
                    Cancelar
                </button>
                <button type='submit'>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}