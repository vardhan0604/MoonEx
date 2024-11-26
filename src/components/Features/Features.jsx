import "./Features.css";
import logo1 from "../../assests/f1.png";
import logo2 from "../../assests/f2.png";
import logo3 from "../../assests/f3.png";
import logo4 from "../../assests/f4.png";

export default function Features() {
  const features = [
    {
      icon: logo1, // Correctly assign the imported image
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: logo2, // Correctly assign the imported image
      title: "CerTIK",
      description: "We are Audited by Certik. CerTIK is the leading security-focused ranking platform.",
    },
    {
      icon: logo3, // Assign imported logo3 directly
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets.",
    },
    {
      icon: logo4, // Reuse logo3 or change as needed
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price.",
    },
  ];

  return (
    <div className="features-section">
      <h2 className="features-title">
        Our <span>Features</span>
      </h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img
              className="feature-icon"
              src={feature.icon} // Dynamically use the icon
              alt={feature.title} // Use a meaningful alt attribute
            />
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
