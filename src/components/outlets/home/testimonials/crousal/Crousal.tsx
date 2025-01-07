import './crousal.css'

function Crousal({path, message}: {path: string, message: string}) {
  return (
    <div className='crousal-wrapper'>
      <div className="crousal-container">
        <div className="crousal-image-container">
          <img src={path} alt="image" id='crousal-image'/>
        </div>
        <div className="crousal-content-container">
          <p id="crousal-content">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Crousal