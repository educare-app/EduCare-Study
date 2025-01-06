import Mob from '../../../../assets/mobile.png'
import './mobile.css'

function Mobile() {
  return (
    <div className='mobile-section-wrapper'>
        <div className="mobile-container">
            <div className="mobile-description">
                <div className="mob-head-wrapper">
                    <p id='mob-des-heading'>Anywhere, Anytime Access with Mobile Apps</p>
                </div>
                <div className="mob-subhead-wrapper">
                    <p id='des-subhead'>Your School Operation on the Go</p>
                </div>
                <div className='mob-desbody-wrapper'>
                    <p id='mob-des-body'>Stay connected with your school’s ERP system through our Android and iOS apps. Manage tasks, track updates, and access key features seamlessly from your mobile device. Empower admins, teachers, and parents with real-time convenience.
                    </p>
                </div>
            </div>
            <div className="mobile-img-wrapper">
                <div className="mob-img-container">
                    <img src={Mob} alt="mobile-img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile