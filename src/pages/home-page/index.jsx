import React from 'react';
import cn from 'classnames';
import Title from '../../components/title'
import P from '../../components/p'
import Button from "../../components/button";
import Subtitle from '../../components/subtitle';
import { INFO_DATA, SLIDER_DATA } from '../../utils/constants'
import ArrowRight from "../../components/icons/ArrowRight";
import Item from "../../components/item";
import Slider from "react-slick";

import './styles.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 3,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <section id="home" className="home" >
        <div className="wrap">
          <div className="home__left">
            <Subtitle>Creative work, creative mind</Subtitle>
            <Title color="black" size="large" className="home__title">We Are Digital
              Creative Agency</Title>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue.</P>
            <Button color="blue" className="home__button">Get in Touch</Button>

          </div>
          <div className="home__right">
            <div className={cn("home__image", "big")}>
              <img src="/assets/home_2.jpg" alt="chairs" />
            </div>
            <div className={cn("home__image", "small")}>
              <img src="/assets/home_1.jpg" alt="chairs" />
            </div>
          </div>
        </div>

        <div className="wrapper">
          {INFO_DATA.map((item, index) => (
            <div className="info" key={index}>
              <Item color={item.color} icon={item.icon} />
              <div className="divider">
                <Title size="medium" >{item.title}</Title>
                <P>{item.description}</P>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="about" className="about">
        <div className="wrapper">
          <div className="image">
            <img src="/assets/about_1.jpg" alt="about" />
          </div>
          <div>
            <Subtitle>About Us</Subtitle>
            <Title color="black" size="large" className="about__title">Design & Develop
              For Better Solution</Title>
            <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</P>
            <Button color="blue" className="about__button">Learn More</Button>
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio">
        <div className="wrapper">
          <div> <Subtitle>Portfolio</Subtitle>
            <Title color="black" size="large" className="portfolio__title">View Our Case Studies</Title></div>
          <div> <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</P><button className="portfolio__btn">VIEw All <ArrowRight /></button></div>
        </div>
        <div className="wrap">
          <div className="image">
            <img src="/assets/port_1.jpg" alt="about" />
            <button className="btn"><ArrowRight /></button>
          </div>
          <div className="image">
            <img src="/assets/port_2.jpg" alt="about" />
            <button className="btn"><ArrowRight /></button>
          </div>
          <div className="image">
            <img src="/assets/port_3.jpg" alt="about" />
            <button className="btn"><ArrowRight /></button>
          </div>
        </div>
      </section>
      <section id="testimony" className="testimony">
        <div className="gradient" />
        <Subtitle>Testimony</Subtitle>
        <Title color="black" size="large" className="testimony__title" >What Do Our Clients Says About Us </Title>
        <img src="/assets/slider/Ellipse1.png" alt="test1" className="img-bg img-bg__1" />
        <img src="/assets/slider/Ellipse2.png" alt="test1" className="img-bg img-bg__2" />
        <img src="/assets/slider/Ellipse3.png" alt="test1" className="img-bg img-bg__3" />
        <img src="/assets/slider/Ellipse5.png" alt="test1" className="img-bg img-bg__5" />
        <img src="/assets/slider/Ellipse6.png" alt="test1" className="img-bg img-bg__6" />
        <img src="/assets/slider/Ellipse7.png" alt="test1" className="img-bg img-bg__7" />
        <Slider {...settings} className="slider">
          {SLIDER_DATA.map((item, index) => {
            return (<div className="slider__item" key={index}>
              <div className="middle-gradient" />
              <div className="image">
                <img src={item.image} alt={item.fullName} />
              </div>
              <P>{item.description}</P>
              <div className="slider__name">{item.fullName}</div>
              <div className="slider__post">{item.post}</div>
            </div>)
          })}
        </Slider>
      </section>
      <section id="news" className="blog">
        <Subtitle>Blog</Subtitle>
        <Title color="black" size="large" className="blog__title" >Read OurNews</Title>
        <div className="wrapper">
          <div className="card">
            <img src="/assets/blog_1.png" alt="blog_1" />
            <p className="sign">
              <span>09 April,2022</span>
              <span>by Admin</span>
            </p>
            <P>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="/assets/blog_2.png" alt="blog_1" />
            <p className="sign">
              <span>09 April,2022</span>
              <span>by Admin</span>
            </p>
            <P className="description">Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src="/assets/blog_3.png" alt="blog_1" />
            <p className="sign">
              <span>09 April,2022</span>
              <span>by Admin</span>
            </p>
            <P>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam </P>
            <button className="card__btn">Read More</button>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="wrapper">
          <Title color="white" size="large" style={{ fontSize: '40px' }}>We Like To Start Your Project With Us</Title>
          <div>
            <Button color="white">Get in Touch</Button>

          </div>
        </div>

      </section>
    </div>
  );
};

export default HomePage;
