import { useState } from 'react'
import api from '../api/api'
import Login from './login/Login'
import Sign from './Sing/Sing'

function App() {
  const [userLogStatus, setUserLogStatus] = useState(false)
  const [loginBar, setLoginBar] = useState(false);
  const [signBar, setSignBar] = useState(false);

  const fetchAllUsers = async () => {
    const results = await api.get('users')
    console.log(results.data)
  }
  const addUser = async () => {
    const user = await api.post('users', {
      "first": "Mor",
      "last": "Ben",
      "email": "Mor@gmail.com",
      "password": "542152456",
      "phone": "0742536985"
    })
    console.log(user.data.token)
  }

  return (
    <div className="App">
      <button onClick={fetchAllUsers}>Fetch All users</button>
      <button onClick={addUser}>Add user</button>
      {!signBar && !loginBar && <button onClick={() => setLoginBar(true)}>Log in</button>}
      {loginBar && <Login />}
      {!signBar && !loginBar && <button onClick={() => setSignBar(true)}>Sign</button>}
      {signBar && <Sign />}
    </div>
  );
}

export default App;
