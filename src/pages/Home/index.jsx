import React, { useState } from 'react';
import './styles/css/style.css';

export default () => {
   const [toDos, setToDos] = useState([]);
   const [inputValue, setInputValue] = useState('');

   const toDoItems = toDos.map(toDo => {
      return (
         <li key={toDo.id}>
            <p>{toDo.name}</p>
            <div>
               <button>
                  <i className="bi bi-x-circle"></i>
               </button>
               <button>
                  <i className="bi bi-pencil-square"></i>
               </button>
            </div>
         </li>
      );
   });

   const handleSubmit = e => {
      e.preventDefault();

      const toDo = {
         id: toDos.length + 1,
         name: inputValue,
         isFinished: false,
      };

      setToDos(prevState => [...prevState, toDo]);
      setInputValue('');
   };

   return (
      <section className="to-do-app">
         <header>
            <h1> What's the Plan for Today? </h1>
         </header>

         <form className="form-main" onSubmit={handleSubmit}>
            <input
               value={inputValue}
               onChange={e => setInputValue(e.target.value)}
               type="text"
               placeholder="Add a todo"
            />
            <button type="submit">Add Todo</button>
         </form>

         <ul className="cards">{toDoItems}</ul>
      </section>
   );
};
