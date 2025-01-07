import React, { useState } from 'react';

function DisplayTab({ tabData }) {
  const [tab, setTab] = useState(tabData);

  const handleClick = (index) => {
    const newTab = tab.filter((_, i) => i !== index);
    setTab(newTab);
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index} onClick={() => handleClick(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;