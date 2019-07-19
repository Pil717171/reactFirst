import React from 'react';
import './Header.css';

const Header = () => {
    return <header className = "header">
    <img src="data:image/png;base64,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" alt="logo"></img>
  </header>
}

export default Header;