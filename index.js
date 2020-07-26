import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent';

const App = () => {
  const [name, setName] = useState('serhiiko');
  const handleClick = () => setName(name === 'serhiiko' ? `${name} dummy programmer🗿` : 'serhiiko');
  return(<p onClick={handleClick}>{name}</p>);
};

customElements.define('react-web-component', reactToWebComponent(App, React, ReactDOM));
