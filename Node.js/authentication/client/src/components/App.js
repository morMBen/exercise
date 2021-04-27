import { useState } from 'react'


function App() {
  const [userLogStatus, setUserLogStatus] = useState(false)

  const fetchAllUsers = () => {

  }

  return (
    <div className="App">
      <button onClick={fetchAllUsers}>Sing in</button>
    </div>
  );
}

export default App;
