import React from 'react';
// import './App.css';
import ToDoList from './ToDoList';
import './style.css';
import { Profile } from './Profile';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Hello world
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }


export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      {/* <ToDoList /> */}
      <Profile/>
    </section>
  );
}
