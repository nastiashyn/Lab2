import React from 'react';

const Logo = ({ ...props }) => {
  return (
    <img src="/assets/logo.png" {...props} alt="logo" />
  );
};

export default Logo;
