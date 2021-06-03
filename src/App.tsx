import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './services/http.service';
import './App.css';

import faker from 'faker';

import { getUsers, postUsers } from './api';
import { User } from './models';

function App() {

  const [output, setOutput] = useState(null as any);
  const [user, setUser] = useState({ id: faker.random.alphaNumeric(10), firstName: faker.name.firstName(), lastName: faker.name.lastName() } as User);
  
  useEffect(() => {
    postUsers(user).then(response => setOutput(JSON.stringify(response.data)));
  }, [user])

  const getUsersHandler = () => {
    getUsers().then(response => setOutput(JSON.stringify(response.data, null, 2)));
  }

  const postUsersHandler = () => {
    setUser({ 
      id: faker.random.alphaNumeric(10),
      firstName: faker.name.firstName(), 
      lastName: faker.name.lastName() 
    });
  }
  
  return (
    <div className="App">
      <pre>{ output }</pre>
      <button onClick={getUsersHandler}>Get Users!</button>
      <button onClick={postUsersHandler}>Post User 
        <pre>{JSON.stringify(user)}</pre>
      </button>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import './services/http.service';
// import './App.css';

// import { getUsers } from './api';

// function App() {

//   const [output, setOutput] = useState('');

//   const getUsersHandler = () => {
//     getUsers().then(data => setOutput(JSON.stringify(data)));
//   }

//   return (
//     <div className="App">

//       <code>{{ output }}</code>

//       <button onClick={getUsersHandler}>Get Users!</button>

//     </div>
//   );
// }

// export default App;
