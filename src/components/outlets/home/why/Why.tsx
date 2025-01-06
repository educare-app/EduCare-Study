import Whygraph from '../../../../assets/whygraph.png'
import Mesh from '../../../../assets/hero/GraphParperGrid.png'
import Check from "../../../../assets/hero/check.png"

import './why.css'

function Why() {
  return (
    <div className="why-section-wrapper">
        <div className="why-section-container">
            <div className="why-heading">
                <p className='heading'>Why to choose us</p>
            </div>
            <div className="why-description-container">
                <div className="graph-container">
                    <div id="why-mesh">
                        <img src={Mesh} alt="why-mesh" id='mesh-img'/>
                        <div id="why-graph">
                            <img src={Whygraph} alt="why-graph" />
                        </div>
                    </div>
                    <div className="why-description-wrapper">
                        <div className="why-description-content">
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Comprehensive Solutions</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>User-Friendly Interface</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Customizable Modules</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Real-Time Insights</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Quick setup</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Budget-friendly</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Powerful tools</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Mobile Accessibility</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>Secure and Reliable</p>
                            </div>
                            <div className="why-description">
                                <div className="check-container">
                                  <img src={Check} alt="check-img" />
                                </div>
                                <p className='why-des'>24 / 7 Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why