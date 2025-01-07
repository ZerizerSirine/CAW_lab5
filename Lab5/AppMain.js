import React, { useState } from 'react';
import ClickMeButton from './ClickMeButton';  
import ToggleButton from './ToggleButton';    
import Counter from './Counter';              


import DisplayTab from './DisplayTab';      


import AuthenticationForm from './AuthenticationForm'; // Import AuthenticationForm component


import AddDivForm from './AddDivForm';        // Import AddDivForm component

function App() {
  const [buttonClicked, setButtonClicked] = useState('');

  const handleButtonClick = (buttonNumber) => {
    setButtonClicked(Button #${buttonNumber} was clicked);
  };

  
  const tab1 = ["apple", "banana", "cherry"];
  const tab2 = ["ayhem", "amiar", "eihem"];

  
  const [users, setUsers] = useState([]);

  const addUser = (username) => {
    setUsers([...users, username]); 
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index)); 
  };

  
  const [divs, setDivs] = useState([]);

  const addDiv = (newDiv) => {
    setDivs([...divs, newDiv]); // Add a new div to the list
  };

  return (
    <div>
      {/* Exo01   */}
      <h1>{buttonClicked}</h1>
      <button onClick={() => handleButtonClick(1)}>Button1</button>
      <button onClick={() => handleButtonClick(2)}>Button2</button>
      <button onClick={() => handleButtonClick(3)}>Button3</button>

      <ClickMeButton />
      <ToggleButton />
      <Counter />

      {/* Exo02 */}
      <h1>Table 1:</h1>
      <DisplayTab tabData={tab1} />

      <h1>Table 2:</h1>
      <DisplayTab tabData={tab2} />

      {/*Exo03*/}
      <h1>Authentication Form</h1>
      <AuthenticationForm addUser={addUser} />

      <h2>List of Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user} <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Exo04*/}
      <h1>Add Div with Custom Styles</h1>
      <AddDivForm addDiv={addDiv} />
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: ${div.height}px,
              width: ${div.width}px,
              backgroundColor: div.color,
              margin: '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;