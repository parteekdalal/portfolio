import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube, FaSquareInstagram, FaSquareXTwitter, FaLinkedin, FaKaggle } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


function Contact () {
  return (
    <section id="contact-page" className="page">
      <h2>Let's Build Something</h2>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities 
        to be part of your vision.
      </p>
      <div id="links">
        <a href="#" className="link">
          <FaSquareXTwitter className="icon"/>
          <p>Twitter</p>
        </a>
        <a href="#" className="link">
          <FaLinkedin className="icon"/>
          <p>LinkedIn</p>
        </a>

        <a href="#" className="link">
          <SiLeetcode className="icon"/>
          <p>LeetCode</p>
        </a>
        <a href="#" className="link">
          <FaKaggle className="icon"/>
          <p>Kaggle</p>
        </a>
        <a href="#" className="link">
          <FaSquareInstagram className="icon"/>
          <p>Instagram</p>
        </a>
        <a href="#" className="link">
          <IoLogoWhatsapp className="icon"/>
          <p>WhatsApp</p>
        </a>
        <a href="#" className="link">
          <FaYoutube className="icon"/>
          <p>YouTube</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;