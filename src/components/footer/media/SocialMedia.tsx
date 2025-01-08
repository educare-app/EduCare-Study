import { Link } from "react-router-dom"
import './socialmedia.css'

function SocialMedia({logo, link }: {logo:string, link: string}) {
  return (
    <div className="media">
        <Link to={link}>
            <img src={logo} alt={`${logo}.logo`} />
        </Link>
    </div>
  )
}

export default SocialMedia