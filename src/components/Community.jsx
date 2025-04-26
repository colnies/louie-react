function Community() {
  return (
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
  );
}

export default Community;