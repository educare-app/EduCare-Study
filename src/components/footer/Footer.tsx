import EduCareLogo from '../../assets/logo/EduCareLogo.png'
import Telephone from '../../assets/contacts/landline.png'
import Phone from '../../assets/contacts/phone.png'
import Email from '../../assets/contacts/email.png'

import Whatsapp from '../../assets/social/whatsapp.png'
import Instagram from '../../assets/social/instagram.png'
import Facebook from '../../assets/social/facebook.png'
import Linkedin from '../../assets/social/linkedin.png'
import Twitter from '../../assets/social/twitter.png'
import Playstore from '../../assets/social/playstore.png'
import Appstore from '../../assets/social/app-store.png'

import { Link } from 'react-router-dom'
import FooterHeading from "./heading/FooterHeading"
import SocialMedia from './media/SocialMedia'

import "./css/footer.css"

function Footer() {
  return (
    <section className="section-eight-wrapper">
      <footer id="footer">

        {/* footer left  */}

        <div id="footer-left">
          <div className="quick-links">
            <div>
                <FooterHeading name='Quick Links'/>
            </div>
            <div className='link-list'>
              <Link to='/about'>About</Link>
              <Link to='/services'>Services</Link>
              <Link to='/career'>Career</Link>
              <Link to='/request-a-demo'>Request a demo</Link>
            </div>
          </div>
        </div>

        {/* footer right  */}

        <div id="footer-right">

          {/* RIGHT - 01  */}

          <div id="right-one">
            <div className="contact-address-wrapper">

              {/* contact */}

              <div className="contact">
                <div>
                  <FooterHeading name='Contacts'/>
                </div>
                <div className='contacts'>
                  <div className='contact-info'>
                    <img src={Telephone} alt="telephone-logo" />
                    <Link to='tel:06123167062'>0612-3167062</Link>
                  </div>
                  <div className='contact-info'>
                    <img src={Phone} alt="phone-logo" />
                    <Link to='tel:6203395765'>(+91) 6203395765</Link>
                  </div>
                  <div className='contact-info'>
                    <img src={Email} alt="email-logo" />
                    <Link to='mailto:sales@indianainfotech.in'>sales@indianainfotech.in</Link>
                  </div>
                </div>
              </div>

              {/* address  */}

              <div className="address">
                <div>
                  <FooterHeading name='Address'/>
                </div>
                <div className='location'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dXXXXX!2d85.1443677!3d25.5972368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a7acd989416b%3A0x61bb5162d6d1ad35!2sIndianainfotech.in!5e0!3m2!1sen!2sin!4vXXXXX"
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - 02 */}

          <div id="right-two">

            {/* Get in touch with us  */}

            <div className="get-in-touch">
              <div>
                <FooterHeading name='Get in touch with us'/>
              </div>
              <div className="social-media">
                <div className='media-list'>
                  <SocialMedia logo={Whatsapp} link='https://google.com'/>
                  <SocialMedia logo={Instagram} link='https://google.com'/>
                  <SocialMedia logo={Facebook} link='https://google.com'/>
                  <SocialMedia logo={Linkedin} link='https://google.com'/>
                  <SocialMedia logo={Twitter} link='https://google.com'/>
                  <SocialMedia logo={Playstore} link='https://google.com'/>
                  <SocialMedia logo={Appstore} link='https://google.com'/>
                </div>
              </div>
            </div>
        </div>
        </div>
      </footer>
      <div className="copy-action-wrapper">
        {/* Company actions  */}

        <div className="company-actions">
            <Link to='/company/privacy'>Privacy</Link>
            <Link to='/company/policy-and-procedures'>Policy & Procedures</Link>
            <Link to='/company/refund'>Refund</Link>
            <Link to='/company/cancellation'>Cancellation</Link>
        </div>

        {/* Copyright */}

        <div className="copyright">
          <div className="copyright-info">
            <span>Copyright &#169; 2025</span>
            <br />
            <span>All rights reserved.</span>
          </div>
          <div className="footer-logo">
            <Link to='/'>
              <img src={EduCareLogo} alt="logo"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer   