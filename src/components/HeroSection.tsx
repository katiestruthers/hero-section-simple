/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import image from '../img/prism.png';

export const HeroSection = () => {
  return (
    <div className="h-lvh">
      <section className="hero shadow-lg">
        <div className="hero__message">
          <header>
            <h1 className="font-semibold text-4xl md:text-5xl xl:text-6xl">Well crafted abstract images</h1>
            <div className="font-light text-lg md:text-xl">High quality abstract images for your projects, wallpaper and presentations.</div>
          </header>
          <div className="hero__buttons">
            <a href="#">
              <button className="text-neutral-900 text-base font-medium bg-white rounded shadow white-button" type="button">Learn more</button>
            </a>
            <a href="#">
              <button className="text-white text-base font-medium bg-indigo-700 rounded shadow blue-button" type="button">See pricing</button>
            </a>
          </div>
        </div>
        <img src={image} alt="Geometric shapes or prisms"></img>
      </section>
    </div>
  );
};