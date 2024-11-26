import "./Footer.css"
import logo from "../../assests/logo.png"
import logo1 from"../../assests/logo1.png"
import logo2 from"../../assests/logo2.png"
import logo3 from"../../assests/logo3.png"
export default function Footer() {
    const navLinks = [
      { label: "About Us", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "#" }
    ]
  
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Moonex" width={180} height={60} />
          </div>
  
          <nav className="footer-nav">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
  
          <div className="footer-contact">
            <span className="contact-text">Contact <span className="highlight">Us</span></span>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src={logo1}alt="Telegram" width={24} height={24} />
              </a>
              <a href="#" className="social-link">
                <img src={logo3} alt="Reddit" width={24} height={24} />
              </a>
              <a href="#" className="social-link">
                <img src={logo2} alt="Twitter" width={24} height={24} />

              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  