import React, {useState} from 'react'
import axios from 'axios';
import '../App.css';

function OutPage(){
    let [users, setUsers] = useState([]);

  let fetch = () =>{
      axios.get("http://localhost:3000/hotels").then((response) => {
        setUsers(response.data);
      })
  }

  return (
    <div className="Hotels">
      {/* <button onClick={fetch}>Fetch</button> */}
      {fetch()}
      <div>{
        users.map((user, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img key={index} src={"http://localhost:3000"+user.path.substring(1)} style = {{
              width: "200px",
              height: "200px"
            }}/>
          );
        })
        }</div>
    </div>
  );
}

export default OutPage;