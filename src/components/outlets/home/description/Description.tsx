import Connector from './connector/Connector'
import './description.css'

function Description({heading, subheading, body, icons}: {heading: string, subheading: string, body: string, icons: string[]}) {
  return (
    <div className='description-wrapper'>
        <div className="description-container">
            <div className="description-content">
                <div className="head-wrapper">
                    <p id='des-heading'>{heading}</p>
                </div>
                <div className="subhead-wrapper">
                    <p id='des-subhead'>{subheading}</p>
                </div>
                <div className='des-body-wrapper'>
                    <p id='des-body'>{body}</p>
                </div>
            </div>
            <div className="description-connectors">
                <div className="connector-wrapper">
                    <div id="first-row" className='row'>
                        <Connector path={icons[0]} title='Todo'/>
                        <Connector path={icons[1]} title='Fee'/>
                    </div>
                    <div id="second-row" className='row'>
                        <Connector path={icons[2]} title='Accountancy'/>
                        <Connector path={icons[3]} title='Enrollment'/>
                    </div>
                    <div id="third-row" className='row'>
                        <Connector path={icons[4]} title='Events'/>
                        <Connector path={icons[5]} title='Bar'/>
                    </div>
                    <div id="forth-row" className='row'>
                        <Connector path={icons[6]} title='Bus'/>
                    </div>
                    <div id="fifth-row" className='row'>
                        <Connector path={icons[7]} title='Message'/>
                        <div id="staff">
                            <Connector path={icons[8]} title='Staff'/>
                        </div>
                        <Connector path={icons[9]} title='Student'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description