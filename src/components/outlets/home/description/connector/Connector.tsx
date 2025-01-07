import './connector.css'

function Connector({path}: {path: string}) {
  return (
    <div className='logo-wrapper'>
        <img src={path} alt='logo' />
    </div>
  )
}

export default Connector
