import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Home() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const aboutRef = useRef(null);
  
  const testimonials = [
    {
      quote: "Adopting Benny was the best decision ever! Senior dogs have so much love to give—you just have to give them a chance!",
      author: "Benny Taylor",
      location: "Nashville, TN",
      image: "/testimonial-1.png"
    },
    {
      quote: "Our rescue dog Max has brought so much joy to our family. He reminds us daily that love is the greatest gift you can give.",
      author: "Sarah Johnson",
      location: "Portland, OR",
      image: "/testimonial-2.png"
    },
    {
      quote: "Fostering has been such a rewarding experience. Each dog we help find a forever home fills our hearts with purpose.",
      author: "Miguel Rodriguez",
      location: "Austin, TX",
      image: "/testimonial-3.png"
    }
  ];

  //const scrollToAbout = () => {
    //aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  //};

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const selectTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
  };

  // Auto rotate testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextTestimonial();
    }, 10000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" ref={aboutRef} className="about-section">
        <div className="about-image-container">
          <img src="/louie-full.png" alt="Louie the Corgi" className="about-image" width="750" height="750" />
        </div>
        <div className="about-meet">
          <p className="about-label">ABOUT</p>
          <h2 className="about-title">Meet Louie</h2>
          <div className="about-content">
            <p className="about-text">
              Hi there, I'm Louie! I'm a rescue dog and social media superstar, spreading joy and
              raising awareness about adopting senior dogs like me. With my playful
              personality and heartwarming antics, I'm here to inspire you to open your heart
              and give a shelter dog a forever home. Join my mission and help make a
              difference in the lives of senior dogs today!
            </p>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="explore-section">
        <p className="section-label">ABOUT</p>
        <h2 className="section-title">Explore Louie's World</h2>
        
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
      </section>

      {/* Adoption Resources Section */}
      <section className="adoption-section">
        <p className="section-left-label">Adoption Resources</p>
        <h2 className="section-left-title">Adopt, Don't Shop</h2>

        <div className="adoption-content">
          <div className="adoption-options">
            <div className="adoption-option">
              <div className="option-icon adopt-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="white"/>
                  <path d="M19 20V18C19 15.79 15.69 14 12 14C8.31 14 5 15.79 5 18V20H19Z" fill="white"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Adopt a Senior Dog</h3>
                <p className="option-description">Give a senior pup the loving home they deserve.</p>
                <a href="#" className="option-link">Find adoptable dogs 
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="adoption-option">
              <div className="option-icon foster-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM15 18H4V14H15V18ZM15 13H4V9H15V13ZM20 18H16V9H20V18Z" fill="white"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Foster & Change a Life</h3>
                <p className="option-description">Not ready to adopt? Fostering saves lives!</p>
                <a href="#" className="option-link">Learn how to foster 
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="adoption-option">
              <div className="option-icon support-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white"/>
                </svg>
              </div>
              <div className="option-content">
                <h3 className="option-title">Support Shelters</h3>
                <p className="option-description">Can't adopt? Donate or volunteer to help rescue dogs in need.</p>
                <a href="#" className="option-link">Get involved 
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="testimonial-container">
            <div className="testimonial active">
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonials[currentTestimonialIndex].quote}</p>
                <p className="testimonial-author">{testimonials[currentTestimonialIndex].author}</p>
                <p className="testimonial-location">{testimonials[currentTestimonialIndex].location}</p>
              </div>
              <div className="testimonial-image">
                <img 
                  src={testimonials[currentTestimonialIndex].image} 
                  alt="Testimonial" 
                  className="author-image" 
                />
              </div>
            </div>
            
            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                  onClick={() => selectTestimonial(index)}
                />
              ))}
            </div>
            
            <div className="testimonial-arrows">
              <button className="arrow-up" onClick={prevTestimonial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14l5-5 5 5z" fill="currentColor"/>
                </svg>
              </button>
              <button className="arrow-down" onClick={nextTestimonial}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="merchandise-section">
        <p className="section-label">Merchandise</p>
        <h2 className="section-title">Droolworthy Merch</h2>
        
        <div className="product-grid">
          <div className="product-card">
            <img src="/tote-bag.png" alt="Tote Bag" className="product-image" />
            <h3 className="product-title">Tote Bag</h3>
            <p className="product-price">$40.00</p>
          </div>
          
          <div className="product-card">
            <img src="/tshirt.png" alt="T-Shirt" className="product-image" />
            <h3 className="product-title">T-Shirt</h3>
            <p className="product-price">$30.00</p>
          </div>
          
          <div className="product-card">
            <img src="/metal-cup.png" alt="Metal Cup" className="product-image" />
            <h3 className="product-title">Metal Cup</h3>
            <p className="product-price">$12.00</p>
          </div>
          
          <div className="product-card">
            <img src="/cap.png" alt="Cap" className="product-image" />
            <h3 className="product-title">Cap</h3>
            <p className="product-price">$15.00</p>
          </div>
        </div>
        
        <div className="store-button-container">
          <Link to="/shop" className="store-button">Go to Louie's Store</Link>
        </div>
      </section>
      
      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <p className="section-left-label">Community</p>
          <h2 className="section-left-title">Join Louie's Mission!</h2>
          <p className="community-description">
            Ready to help senior dogs?<br />
            Adopt, foster, or donate to make a difference today!
          </p>
          
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
        <div className="community-image">
          <img src="/louie-happy.png" alt="Louie happy" className="louie-community-image" />
        </div>
      </section>
    </>
  );
}

export default Home;