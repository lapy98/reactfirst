import './App.css';
//import { User } from './User';
//import { UserN } from './UserN';
//import { Planets } from './Planets';
import { useState} from "react";
import React from 'react';

function App() {
  // const isGreen = true;
  // const names = ["Mirko", "Nenisa", "Prof", "Dejan"];
  // const users = [
  //   {name: "4Professor", age: 53},
  //   {name: "6Nenisa", age: 50},
  //   {name: "8Mirko", age: 51}
  // ];
  // const planets = [
  //   {name: "Mars", isGasPlanet: false, gasPlanet: "nije"},
  //   {name: "Earth", isGasPlanet: false, gasPlanet: "nije"},
  //   {name: "Jupiter", isGasPlanet: true, gasPlanet: "je"},
  //   {name: "Venus", isGasPlanet: false, gasPlanet: "nije"},
  //   {name: "Neptun", isGasPlanet: true, gasPlanet: "je"},
  //   {name: "Uranus", isGasPlanet: true, gasPlanet: "je"}
  // ]
  // const [inputValue, setInputValue] = useState("");
  // const [showText, setShowText] = useState(true);
//  const[textColor, setTextColor] = useState("")
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // const [count, setCount] = useState(0);

  // const increase = () => {
  //   setCount(count + 1);
  // };

  // const decrease = () => {
  //   setCount(count - 1);
  // };

  // const setToZero = () => {
  //   setCount(0);
  // }
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }

  return (
    <div className="App">
      <div className="addTask"></div>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      <div className="listTask">
        {todoList.map((task) => {
          return <h1 key={task.toString()}>{task}</h1>        
          })}
      </div>
      {/* <button onClick = {increase}> Increase</button>
      <button onClick = {decrease}> Decrease</button>
      <button onClick = {setToZero}> Set to Zero</button> */}
      
      {/* <button 
        onClick = {() => {
          setCount (count + 1);
      }}
      >Increase</button>
     
      <button 
        onClick = {() => {
          setCount (count - 1);
      }}
      >Decrease</button>
     
      <button 
        onClick = {() => {
          setCount(0);
      }}
      >Set to Zero</button> */}
      {/* {count} */}
     {/* <input type="text" onChange={handleInputChange}/> */}
     {/* <button 
        onClick={() => {
          // setShowText(!showText);
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >Show/Hide</button> */}
     {/* {showText === true && <h1>HI THIS IS FIRST MAP</h1>} */}
     {/* <h1 style={{ color:textColor}}>HI THIS IS FIRST MAP</h1> */}
     {/* {inputValue} */}
{/*       <User name="Nesa" age={53} email="nesto@basnesto.com"/>  
      <Jobs salary={20000} position="Big chief" company="Site" />
      <h1 style={{color: isGreen ? "green" : "red" }}>This has color</h1>
      {isGreen && <button>This is button</button>}
      <h1>{names[2]}</h1>
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      } )}
      {users.map((user,key) => {
        return <div>
          <UserN name={user.name} age={user.age} />
        </div>
      })}
     {planets.map((planet,key) => {
        if (planet.isGasPlanet) return <h1> {planet.name}</h1>
        else return null
      })}
      {planets.map((planet,key) => {
        return (
        <h1><Planets name={planet.name} gasPlanet={planet.gasPlanet} /></h1>
        )
      })} */}
       
    </div>
  );
}
// const Jobs = (props) => {
//   return (
//   <div>
//     <h1>{props.salary}</h1>
//     <h1>{props.position}</h1>
//     <h1>{props.company}</h1>
//   </div>
//   );
// };

export default App;
