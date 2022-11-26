import React from 'react';
import Logo from "../../icons/Logo";
import Send from "../../icons/Send";
import Facebook from "../../icons/Facebook";
import Twitter from "../../icons/Twitter";
import Instargram from "../../icons/Instagram";
import Title from '../../title'
import P from '../../p';

import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo className="logo" />
        <div className="contact-our">
          <Title size="medium" color="black" className="title">Our Contact</Title>
          <P>Office: 4042 Imperial Road, UK</P>
          <P>Help; (0411) 425 277 / 425</P>
          <P>Email: inbox@finance.com</P>
        </div>
        <div className="about-us">
          <Title size="medium" color="black" className="title">About Us</Title>
          <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </P>
        </div>
        <div className="subscribe">
          <Title size="medium" color="black" className="title">Subscribe</Title>
          <div className="email">
            <input placeholder="Your email" />
            <Send className="send-email" />
          </div>
          <Title size="medium" color="black" className="title">Follow Us</Title>
          <div className="media">
            <Facebook className="icon" />
            <Twitter className="icon" />
            <Instargram className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
