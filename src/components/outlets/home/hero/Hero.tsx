import Mesh from '../../../../assets/hero/GraphParperGrid.png'
import Organic from '../../../../assets/hero/BlueOrganicShape.png'
import Png from '../../../../assets/hero/HomePageAnimatedPerson.png'


import '../css/hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div id="layer-wrapper">
        <div id="mesh-layer">
            <img src={Mesh} alt="mesh-img" className='mesh-img'/>
            <div className="organic-shape-layer">
                <div className="organic-shape-wrapper">
                    <img src={Organic} alt="organic-shape-img" className='organic-shape'/>
                </div>
            </div>
            <div className="png-layer">
                <div className="png-wrapper">
                    <img src={Png} alt="png-hero" className='png-hero'/>
                </div>
            </div>
            <div className="content-layer">
                <div className="content-wrapper">
                    <div className='main-heading'>
                        <span>
                            <em id='revolutionize'>Revolutionize</em> Your School Management
                        </span>
                    </div>
                    <div className='sub-heading'>
                        <span>
                            Empower Your Institution with a Smarter, Simpler ERP Solution.
                        </span>
                    </div>
                    <div className='hero-body-wrapper'>
                        <p className='hero-body-text'>
                            Say goodbye to manual tasks and disconnected 
                            systems. Out all-in-one ERP software transforms
                            how school operate-streamlining processes, 
                            boosting efficiency, and keeping everyone 
                            connected. Manage everything from academics
                            to finances with ease, anytime and anywhere. 
                            Discover the future of school management today!
                        </p>
                    </div>
                    <Link to='/request-a-demo' className='cta-btn'>
                        <div className="hero-cta-wrapper">
                            <span>REQUEST A DEMO</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero