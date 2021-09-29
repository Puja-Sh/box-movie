import React from 'react';
import { Link } from 'react-router-dom';

function Navs() {
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];

  return (
    <ul>
      {LINKS.map(item => (
        <li key={item.to}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navs;
