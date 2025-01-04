import EduCareLogo from '../../assets/logo/EduCareLogo.png'
import Telephone from '../../assets/contacts/landline.png'
import Phone from '../../assets/contacts/phone.png'
import Email from '../../assets/contacts/email.png'
import { Link } from 'react-router-dom'
import "./css/footer.css"

function Footer() {
  return (
    <section className="section-eight-wrapper">
      <footer className="footer-eight">

        {/* footer left  */}

        <div id="footer-left">
            <div className='footer-left-wrapper'>
                <div className='quick-links-wrapper'>
                    <p className='quick-links'>Quick Links</p>
                    <div className="links">
                      <Link to='/about'>About</Link>
                      <Link to='/services'>Services</Link>
                      <Link to='/career'>Career</Link>
                      <Link to='/request-a-demo'>Request a demo</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* footer right  */}
        <div id="footer-right">
          <div className="footer-right-wrapper">
            <div className="contact-address-wrapper">

              {/* contact  */}

              <div className="contact">
                <p className='contact-heading'>Contacts</p>
                <div className="contact-lists">
                  <div className="telephone">
                    <div className="icon">
                      <img src={Telephone} alt="tel-logo" />
                      <Link to='tel:0612-3167062' className='c-info'>0612-3167062</Link>
                    </div>
                  </div>
                  <div className="phone">
                    <div className="icon">
                      <img src={Phone} alt="phone-logo" />
                      <Link to='tel:6203395765' className='c-info'>(+91)6203395765</Link>
                    </div>
                  </div>
                  <div className="email">
                    <div className="icon">
                      <img src={Email} alt="email-logo" />
                      <Link to='mailto:sales@indianainfotech.in' className='c-info'>sales@indianainfotech.in</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address"></div>
            </div>
            <div className="getin-toch-wrapper"></div>
          </div>
        </div>
      </footer>

      {/* Company actions */}

      <div className='footer-main'>
        <div className='copyright-wrapper'>
          <div>
            <span>Copyright &#169; 2025</span>
            <br />
            <span>All rights reserved.</span>
          </div>
          <div className='footer-logo'>
            <img src={EduCareLogo} alt="logo" className='logo'/>
          </div>
        </div>
        <div className='sensitive-info'>
          <div className='info-reference'>
            <Link to='/company/privacy'>Privacy </Link>
            <Link to='/company/policy-and-procedures'>Policy & Procedures </Link>
            <Link to='/company/refund'>Refund </Link>
            <Link to='/company/cancellation'>Cancellation</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer   