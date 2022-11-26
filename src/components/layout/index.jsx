import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import Footer from "./footer";
import Header from "./header";

import './styles.scss'

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation()

  const handleScroll = useCallback(() => {
    const element = document.getElementById(hash.replace("#", ""));

    element &&
      setTimeout(() => {
        window.scrollTo({
          block: 'start',
          behavior: "smooth",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
  }, [hash]);

  useEffect(() => {
    handleScroll()
  }, [pathname, hash, handleScroll])

  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
