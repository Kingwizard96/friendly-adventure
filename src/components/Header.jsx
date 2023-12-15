// Inside your Header component
import React from 'react';

const Header = () => {
  return (
    <div>
      <img
        src="/src/assets/header.jpeg"
        alt="Your Alt Text"
        style={{ maxWidth: '70%', height: 'auto' }}
      />
    </div>
  );
};

export default Header;