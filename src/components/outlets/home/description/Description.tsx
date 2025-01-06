import Todo from '../../../../assets/dashboard/to-do-list.png'

import Connector from './connector/Connector'

import './description.css'

function Description({heading, subheading, body}: {heading: string, subheading: string, body: string}) {
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
                    <div id="first-row">
                        <Connector path={Todo} title='Todo'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description