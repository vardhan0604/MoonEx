import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Trusted Multi-Chain <span>DEX Platform</span></h1>
        <p>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Connect Wallet</button>
          <button className="hero-button secondary">Trade Crypto</button>
        </div>
      </div>
      <div className="hero-background"></div>
    </div>
  );
};

export default Hero;
