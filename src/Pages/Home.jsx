import React from 'react';
import logo from '../components/assets/logo.png';
import './css/home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <p>Journey Finder</p>
      </div>
      <h1 className="main-title">Find your next vacation destination</h1>
      <p className="intro-paragraph">Welcome to Journey Finder</p>
      <p className="description">
        Dreaming of a vacation but overwhelmed by too many options? Journey Finder is here to simplify your travel planning. We help you discover new destinations tailored to your preferences, ensuring each trip is unique and memorable.
      </p>
      <p className="description">
        Just share your preferences with us, and our advanced AI will generate a list of ideal destinations tailored to you. Whether you’re looking for a beach getaway, a mountain retreat, or a city adventure, Journey Finder guides you to the perfect spot.
      </p>
      <p className="description">
        Say goodbye to repetitive trips and hello to exciting new adventures. Start your journey with Journey Finder and explore the world in a whole new way.
      </p>
      <h2 className="call-to-action">Begin your adventure today!</h2>
      <br/>
      <br/>
      <div className="button-container">
        <button className="profile-button">Update my profile preferences</button>
        <button className="destination-button">Find my destination</button>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
};

export default HomePage;
