import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './services/http.service';
import './App.css';

import { getUsers, postUsers } from './api';
import { UserModel } from './models';
import { UserModelExample } from './components';

function App() {
  const [output, setOutput] = useState(null as any);
  const [user, setUser] = useState(new UserModel());

  const getUsersList = async () => await getUsers()
    .then(r => setOutput(JSON.stringify(r.data, null, 2)))
    .catch(err => console.error(err));
  
  const createUser = async (user: UserModel = new UserModel()) => await postUsers(user)
    .then(r => setOutput(JSON.stringify(r.data)))
    .catch(err => console.error(err))
    .finally(() => setUser(new UserModel()));

  return (
    <div className="App">
      <pre>{ output }</pre>
      <button onClick={getUsersList}>Get Users!</button>
      <button onClick={() => createUser(user)}>Create User 
        <pre>{JSON.stringify(user)}</pre>
      </button>
      <UserModelExample user={user} />
    </div>
  );
}

export default observer(App);
