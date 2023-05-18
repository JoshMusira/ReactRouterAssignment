
import { FaHome, FaInfoCircle, FaBook } from "react-icons/fa"
import {Link} from 'react-router-dom'

export default function Header(){

  return (
    <div className="header">

        <div className='logo'>Stock Market News</div>
        <div className="navbar">
            <Link id='link-home' to = "/"><FaHome />Home</Link>
            <Link id='link-about' to = "/about"> <FaInfoCircle />About</Link>
            <Link id='link-contact' to = "/contact"> <FaBook /> Contact</Link>
           
        </div>

    </div>
  )

}