  
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apiMessage, setApiMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const apires = await axios(
        '/api/function1'
      );

      setApiMessage(apires.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      Hi. Here's something from the api:
      <br />
      {apiMessage}
      <br />
      <br />
      Login:
      <br />
      <a href={'/.auth/login/aad'}>Aad</a>
      <br />
      <a href={'/.auth/login/facebook'}>facebook</a>
      <br />
      <a href={'/.auth/login/google'}>google</a>
      <br />
      <a href={'/.auth/login/github'}>github</a>
      <br />
      <a href={'/.auth/logout'}>logout</a>
    </div>
  );
}

export default App;
