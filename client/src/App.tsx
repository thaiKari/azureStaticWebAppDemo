  
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
      {apiMessage}
    </div>
  );
}

export default App;
