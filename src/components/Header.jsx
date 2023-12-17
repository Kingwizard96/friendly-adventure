// Inside your Header component
import React from 'react';
import '../index.css'

const Header = () => {
  return (
    <div>
      <img
        src="/src/assets/musashi.webp"
        id='headerImg'
        alt="Your Alt Text"
        style={{ maxWidth: '70%', height: 'auto' }}
      />
    </div>
  );
};

export default Header;