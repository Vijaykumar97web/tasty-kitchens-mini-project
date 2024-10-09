import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="responsive-footer-design">
    <div className="footer-logo-container">
      <img
        src="https://res.cloudinary.com/dxvg2pjg9/image/upload/v1728367968/FooterAppLogo_pa3z4n.png"
        alt="website-footer-logo"
      />
      <h1 className="footer-logo-text">Tasty Kitchens</h1>
    </div>
    <p className="footer-paragraph">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="footer-social-icons-container">
      <FaInstagram
        testid="instagram-social-icon"
        size={20}
        className="footer-social-icons-styles"
      />
      <FaPinterestSquare
        testid="pintrest-social-icon"
        size={20}
        className="footer-social-icons-styles"
      />
      <FaTwitter
        testid="twitter-social-icon"
        size={20}
        className="footer-social-icons-styles"
      />
      <FaFacebookSquare
        testid="facebook-social-icon"
        size={20}
        className="footer-social-icons-styles"
      />
    </div>
  </div>
)

export default Footer
