import React from 'react';
import Community from './Community';
import '../css/styles.css';

const BehindTheScenes = () => {
  return (
    <>
      {/* BTS Section */}
      <section id="BTS" className="bts-section">
        <div className="behind-the-scenes">
          <p className="bts-label">BEHIND THE SCENES</p>
          <h2 className="bts-heading">Life with Louie</h2>
          <div className="bts-content">
            <p className="bts-text">
              Get an inside look at Louie's world! From silly bloopers to his favorite snacks, here's your exclusive peek into his daily adventures.
            </p>
          </div>
        </div>

        <div className="bts-image-container">
          <img src="/bts-image.png" alt="Louie the Corgi" className="bts-image" />
        </div>
      </section>

      {/*A Day in Louie's Life Section*/}
      <section className="day-section">
        <h2 className="section-title">A Day in Louie's Life</h2>
        
        <div className="content-cards">
          <div className="content-card">
            <div className="card-image-container">
              <img src="/louie-resting.png" alt="Louie resting" className="card-image" />
              <button className="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className="card-content">
              <h3 className="card-title">Title</h3>
              <p className="card-description">Short Description</p>
              <div className="card-meta">
                <span className="views">10k Views</span>
                <span className="date">Date</span>
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="card-image-container">
              <img src="/louie-tent.png" alt="Louie in a tent" className="card-image" />
              <button className="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className="card-content">
              <h3 className="card-title">Title</h3>
              <p className="card-description">Short Description</p>
              <div className="card-meta">
                <span className="views">10k Views</span>
                <span className="date">Date</span>
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="card-image-container">
              <img src="/louie-friends.png" alt="Louie with friend" className="card-image" />
              <button className="play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className="card-content">
              <h3 className="card-title">Title</h3>
              <p className="card-description">Short Description</p>
              <div className="card-meta">
                <span className="views">10k Views</span>
                <span className="date">Date</span>
              </div>
            </div>
          </div>
        </div>

        <button className="watch-more-button">Watch More Bloopers</button>   
      </section>

      <section className="favorites-section">
        <img src="/louie-hearts.png" alt="Louie with hearts" className="louie-hearts-image" />
        <h2 className="section-title">Louie's Favorite Things</h2>
        
        <div className="favorites-grid">
          <div className="favorite-card">
            <img src="/cheese-treats.png" alt="Cheese Treats" className="favorite-image" />
            <div className="favorite-content">
              <h3 className="favorite-title">Cheese Treats <span className="emoji">🧀</span></h3>
              <p className="favorite-description">The stinkier, the better! Louie can't resist a good cheddar snack.</p>
              <a href="#" className="favorite-link">Shop Louie's Faves</a>
            </div>
          </div>
          
          <div className="favorite-card">
            <img src="/cozy-blanket.png" alt="Cozy Blankets" className="favorite-image" />
            <div className="favorite-content">
              <h3 className="favorite-title">Cozy Blankets <span className="emoji">🛏️</span></h3>
              <p className="favorite-description">Perfect for post-adventure naps and snuggles.</p>
              <a href="#" className="favorite-link">Snag a Cuddly Blanket</a>
            </div>
          </div>
          
          <div className="favorite-card">
            <img src="/tennis-ball.png" alt="Tennis Balls" className="favorite-image" />
            <div className="favorite-content">
              <h3 className="favorite-title">Tennis Balls <span className="emoji">🎾</span></h3>
              <p className="favorite-description">Fetch champion approved! Louie never turns down a game.</p>
              <a href="#" className="favorite-link">Grab Louie's Go-To Ball</a>
            </div>
          </div>
          
          <div className="favorite-card">
            <img src="/adventure-walks.png" alt="Adventure Walks" className="favorite-image" />
            <div className="favorite-content">
              <h3 className="favorite-title">Adventure Walks <span className="emoji">🌲</span></h3>
              <p className="favorite-description">Louie loves new trails, endless sniffs, and making new friends along the way.</p>
              <a href="#" className="favorite-link">Find a Dog-Friendly Trail Near You</a>
            </div>
          </div>
        </div>
      </section>

      {/*Meet the Crew*/}
      <section className="crew-section">
        <h2 className="section-title">Meet the Crew</h2>
        
        <div className="content-cards">
          <div className="content-card">
            <div className="card-image-container">
              <img src="/the-boss.png" alt="Louie" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Louie</h3>
              <p>The Boss</p>
              <p className="card-description">Louie's the face of the mission, spreading love for senior dog adoption. He's a playful, snuggly superstar who never misses a chance to entertain.<br/><br/>Fun Fact: Louie believes every nap should be a snooze fest. 💤</p>
            </div>
          </div>

          <div className="content-card">
            <div className="card-image-container">
              <img src="/brittany.png" alt="Brittany" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Brittany</h3>
              <p>The Supporter</p>
              <p className="card-description">Brittany is Louie's full-time human and social media voice, spreading his message with heart and passion.<br/><br/>Fun Fact: Brittany loves hiking with Louie and exploring new places!</p>
            </div>
          </div>

          <div className="content-card">
            <div className="card-image-container">
              <img src="/max.png" alt="Max" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Max</h3>
              <p>The Best Buddy</p>
              <p className="card-description">Max is Louie's loyal sidekick, adding extra cuteness to every adventure they share together.<br/><br/>Fun Fact: Max's favorite pastime? Licking Louie's ears. 🐾</p>
            </div>
          </div>

          <div className="content-card">
            <div className="card-image-container">
              <img src="/samantha.png" alt="Samantha" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Samantha</h3>
              <p>The Advocate</p>
              <p className="card-description">Samantha works with shelters and rescue groups, helping Louie spread awareness and find forever homes for senior dogs.<br/><br/>Fun Fact: Samantha can never resist a doggy cuddle session with Louie and Max!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
       <Community />
    </>
  );
};

export default BehindTheScenes;