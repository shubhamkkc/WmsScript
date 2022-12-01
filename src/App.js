import './index.css';
import Deadlock from './Deadlock';
import Migration from './Migration';
import NewUserCreation from './NewUserCreation';
import React, { useState } from 'react';
function App() {
  const scriptName = ['deadlock', 'EOS', 'New User Creation', 'migration'];
  const [script, setScript] = useState({});
  const handleChange = (e) => {
    const { value, name } = e.target;
    setScript({ [name]: value });
    console.log(script);
  };
  if (script.scriptName === 'deadlock') return <Deadlock />;
  if (script.scriptName === 'migration') return <Migration />;
  if (script.scriptName === 'New User Creation') return <NewUserCreation />;
  return (
    <>
      <div className='form'>
        <label htmlFor=''>Select WMS Script</label>
        <select name='scriptName' id='script' onChange={handleChange}>
          <option>choose option</option>
          {scriptName.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      {/* <Export /> */}
    </>
  );
}

export default App;
