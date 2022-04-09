import { useState } from 'react';
import './styles/css/style.css';
import Card from '../../components/Card';

export default function Home() {
   return (
      <section className="to-do-app">
         <header>
            <h1> What's the Plan for Today? </h1>
         </header>
         <form>
            <input type="text" placeholder="Add a todo" />
            <button type="submit">Add Todo</button>
         </form>
         <ul>
            <Card />
         </ul>
      </section>
   );
}
