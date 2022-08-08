import React from 'react'
import { AppUI } from './components/AppUI'
import {TodoProvider} from './components/hooks/Context'

//import './App.css';

//const defaultTodos = [
//  {text: 'Cortar cebolla', completed: false},
//  {text: 'Tomar el curso de intro a React', completed: false},
//  {text: 'Llorar con la Llorona', completed: false}
//]



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
