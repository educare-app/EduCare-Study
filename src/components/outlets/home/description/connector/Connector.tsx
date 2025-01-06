import './connector.css'

function Connector({path, title}: {path: string, title: string}) {
  return (
    <div className='logo-wrapper'>
        <img src={path} alt={`${title}-logo`} title={title}/>
    </div>
  )
}

export default Connector