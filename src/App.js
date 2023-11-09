import './App.css';
import {User} from './User';
import {UserN} from './UserN';

function App() {
  const isGreen = false;
  const names = ["Mirko", "Nenisa", "Prof", "Dejan"];
  const users = [
    {name: "4Professor", age: 53},
    {name: "6Nenisa", age: 50},
    {name: "8Mirko", age: 51}
  ];
  return (
    <div className="App">
      <User name="Nesa" age={53} email="nesto@basnesto.com"/>  
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
    </div>
  );
}

const Jobs = (props) => {
  return (
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
  );
};

export default App;
