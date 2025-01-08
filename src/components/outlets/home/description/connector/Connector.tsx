// import './connector.css'

// function Connector({path}: {path: string}) {

//   const pathArr = path.split("/")
//   const Title = pathArr[pathArr.length-1].split(".")[0]

//   return (
//     <div className='logo-wrapper'>
//         <img src={path} alt='logo' title={Title}/>
//     </div>
//   )
// }

// export default Connector


import './connector.css';
import { useState } from 'react';

function Connector({ path }: { path: string }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const pathArr = path.split('/');
  const Title = pathArr[pathArr.length - 1].split('.')[0];

  return (
    <div
      className='logo-wrapper'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img src={path} alt='logo' />
      {showTooltip && <div className='custom-tooltip'>{Title}</div>}
    </div>
  );
}

export default Connector;
