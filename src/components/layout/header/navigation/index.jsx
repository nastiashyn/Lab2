import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './styles.scss'

const MENU = [
  { label: 'Home', hash: '#home' },
  { label: 'About Us', hash: '#about' },
  { label: 'Portfolio', hash: '#portfolio' },
  { label: 'Testimony', hash: '#testimony' },
  { label: 'News', hash: '#news' },
  { label: 'Contact', hash: '#contact' },
]

const Navigation = () => {
  const { hash } = useLocation();


  return (
    <nav className="navigation">
      {MENU.map((item, index) => (<Link to={item.hash} key={item.hash} className={cn("link", { active: hash ? hash === item.hash : index === 0 })}>{item.label}</Link>))}
    </nav>
  );
};

export default Navigation;
