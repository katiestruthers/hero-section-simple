/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import image from '../img/prism.png';

export const HeroSection = () => {
  return (
    <section className="hero flex">
      <header>
        <h1 className="font-semibold text-4xl md:text-5xl xl:text-6xl">Well crafted abstract images</h1>
        <div className="font-normal text-lg md:text-xl">High quality abstract images for your projects, wallpaper and presentations.</div>
        <a href="#">
          <button className="text-neutral-900 text-base font-medium bg-white px-4 py-2.5 rounded shadow white-button" type="button">Learn more</button>
        </a>
        <a href="#">
          <button className="text-white text-base font-medium bg-indigo-700 px-4 py-2.5 rounded shadow blue-button" type="button">See pricing</button>
        </a>
      </header>
      <img src={image} alt="Geometric shapes or prisms"></img>
    </section>
  );
};