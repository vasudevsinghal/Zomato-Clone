import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Salute({ fname, lname }) {
  return <h1>hello {fname} {lname}</h1>;
}

function SaluteAll() {
  let [info, setInfo] = useState([["Vasu", "Singhal"], ["Ayush", "Garg"], ["Prakrit", "Pathak"]]);

  let [info2, setInfo2] = useState([]);

  let shift = () => {
    if(info.length>0){
      let item = info.pop();
      info2.push(item);
    }
    console.log(info);
    console.log(info2);
    setInfo(info);
    setInfo2(info2);
  }
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      <button onClick={shift}>Click me</button>
      <h1>List 1</h1>
      <div>
      {info.map(([fname, lname], index) => {
        return <Salute fname={fname} lname={lname} key={index}/>;
      })}
      </div>
      <h1>List 2</h1>
        <div>
        {info2.map(([fname, lname], index) => {
          return <Salute fname={fname} lname={lname} key={index}/>;
        })}
      </div>
    </div>
    
  );
}

ReactDOM.render(
  <React.StrictMode>
    <SaluteAll></SaluteAll>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
