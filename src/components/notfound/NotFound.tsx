import NotFoundImg from '../../assets/notfound.png'
import './notfound.css'

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-img-container">
        <img src={NotFoundImg} alt="not-found-img" />
      </div>
    </div>
  )
}

export default NotFound