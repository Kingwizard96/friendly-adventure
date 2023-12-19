import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="/src/assets/musashi.webp"
        id='headerImg'
        alt="profile"
        style={{
          maxWidth: '70%',
          height: 'auto',
          borderRadius: '8px', // Adjust the value for the desired amount of curvature
          boxShadow: 'rgba(7, 24, 23, 0.31) 10px 15px 15px', // Updated box-shadow
        }}
      />
      <style>
        {`
          #headerImg {
            /* Add any additional styles specific to your header image here */
          }
        `}
      </style>
    </div>
  );
};

export default Header;