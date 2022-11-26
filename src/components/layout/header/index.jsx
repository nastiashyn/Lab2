import React from 'react';
import cn from 'classnames'
import Logo from "../../icons/Logo";
import Navigation from './navigation'
import { useScrollY } from "../../../hooks/useScrollY";

import './styles.scss'

const Header = () => {
  const y = useScrollY();

  return (
    <header className={cn('header')}
      style={{ transition: 'all 0.3s ease', background: `rgba(216, 216 ,226, ${y / 250})` }}
    >
      <div className="container">
        <Logo />
        <Navigation />

      </div>
    </header>
  );
};

export default Header;
