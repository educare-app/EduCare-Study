import One from '../../../../assets/schools/one-min.png'
import Three from '../../../../assets/schools/three-min.png'
import Four from '../../../../assets/schools/four-min.png'
import Six from '../../../../assets/schools/six-min.png'
import Seven from '../../../../assets/schools/seven-min.png'
import Nine from '../../../../assets/schools/nine-min.png'
import Ten from '../../../../assets/schools/ten-min.png'
import Eleven from '../../../../assets/schools/eleven-min.png'
import Twelve from '../../../../assets/schools/twelve-min.png'
import Thirteen from '../../../../assets/schools/thirteen-min.png'
import Fourteen from '../../../../assets/schools/fourteen-min.png'
import Fifteen from '../../../../assets/schools/fifteen-min.png'
import Sixteen from '../../../../assets/schools/sixteen-min.png'
import Seventeen from '../../../../assets/schools/seventeen-min.png'

import Schools from './schools/Schools'

import './clients.css'

function Clients() {

    const pathOne = [One, Three, Four, Seventeen, Six, Thirteen, Fourteen]
    const pathTwo = [Seven, Nine, Ten, Eleven, Twelve, Fifteen, Sixteen]

  return (
    <div className='client-wrapper'>
        <div className='client-heading-wrapper'>
            <div className='client-heading'>
                <span>Happy Schools</span>
            </div>
        </div>
        <div className='client-logo-wrapper'>
            <div className="container">
                {
                    pathOne.map((path, index) => (
                        <Schools path={path} key={`original-${index}`}/>
                    ))
                }
            </div>
            <div className="container">
                {
                    pathTwo.map((path, index) => (
                        <Schools path={path} key={`original-${index}`}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Clients