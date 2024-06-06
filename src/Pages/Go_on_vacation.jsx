import React from 'react'
import './css/Go_on_vacation.css'

export const Go_on_vacation = () => {
  return (
    <>
    <div className="container">
      <h1>Learn about your perfect destination</h1>
      <br/>
      <br/>
      <p className="subtitle">
        Want a more precise search? Fill out your <a href="/preferences">preferences on your user page</a>
      </p>
      <br/>
      <section>
        <h2>Trip specificities</h2>
        <br/><hr /><br/>
      
        <h3>Travel companions</h3>
        <div className="categories">
          <button className="category-button">Solo traveling</button>
          <button className="category-button">Couple</button>
          <button className="category-button">Family</button>
          <button className="category-button">Friends</button>
          <button className="category-button">Coworkers</button>
        </div>
        <h3>Purpose of the trip</h3>
        <div className="categories">
          <button className="category-button">Relaxation</button>
          <button className="category-button">Adventure</button>
          <button className="category-button">Cultural discovery</button>
          <button className="category-button">Special event</button>
          <button className="category-button">Business trip</button>
          <button className="category-button">Ecotourism</button>
          <button className="category-button">Culinary trip</button>
        </div>
      </section>
      <br/>
      <section>
        <h2>Activities</h2>
        <br/><hr /><br/>
      
        <h3>Moving around</h3>
        <div className="categories">
          <button className="category-button">Sports</button>
          <button className="category-button">Diving</button>
          <button className="category-button">Hiking</button>
          <button className="category-button">Amusement park</button>
          <button className="category-button">Aquaparks</button>
          <button className="category-button">Parks</button>
          <button className="category-button">Zoos</button>
          <button className="category-button">Shopping</button>
        </div>
        <h3>Cultural activities</h3>
        <div className="categories">
          <button className="category-button">Cultural visits</button>
          <button className="category-button">History</button>
          <button className="category-button">Museums</button>
          <button className="category-button">Architecture</button>
          <button className="category-button">Bridges</button>
          <button className="category-button">Markets</button>
          <button className="category-button">Theaters</button>
          <button className="category-button">Food tasting</button>
        </div>
        <h3>Relaxing</h3>
        <div className="categories">
          <button className="category-button">Relaxation</button>
          <button className="category-button">Spas</button>
          <button className="category-button">Libraries</button>
        </div>
        <h3>Creative activities</h3>
        <div className="categories">
          <button className="category-button">Photography</button>
          <button className="category-button">Painting</button>
          <button className="category-button">Handicraft</button>
        </div>
        <h3>Nightlife</h3>
        <div className="categories">
          <button className="category-button">Quiet evenings</button>
          <button className="category-button">Vibrant nightlife</button>
          <button className="category-button">Clubs</button>
          <button className="category-button">Bars</button>
        </div>
      </section>

      <section>
        <h2>Other requests</h2>
        <textarea className="other-requests" placeholder="..."></textarea>
      </section>
      <div className="submit-container">
        <button className="submit-button">Send!</button>
      </div>
    </div>
    </>
  )
}
