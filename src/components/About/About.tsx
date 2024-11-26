import './About.css'; // Import CSS file for styling
import group from "../../assests/group.png"
const About = () => {
  return (
    <div className="about">
      <div className='header'>
        <span className='header-why'>Why </span>
         MoonEx?
      </div>
      <div >
        <img className='imgg' src={group} alt="" />
      </div>
    </div>
  );
};

export default About;
