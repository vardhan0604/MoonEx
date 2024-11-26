import logo from "../../assests/logo.png"
import './Navbar.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#faqs">FAQs</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <button className="navbar-wallet-button">Connect Wallet</button>
    </div>
  );
};

export default Navbar;
