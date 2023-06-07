// import {signOut} from "firebase/auth"
// import { auth } from '../firebase'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTelegramFill} from 'react-icons/ri'
import {BsGithub,BsTwitter} from 'react-icons/bs'
import {TfiWorld } from 'react-icons/tfi'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="user">
        <a target="blank" href='https://t.me/drefuz'><AiOutlineInstagram/></a> 
        <a target="blank" href='https://instagram.com/f.jumabayev/'><RiTelegramFill/></a>    
        <a target="blank" href='https://twitter.com/iamdrefuz/'><BsTwitter/></a>  
        <a target="blank" href='https://instagram.com/f.jumabayev/'><BsGithub/></a> 
        <a target="blank" href='https://drefuz-portfolio.netlify.app'><TfiWorld/></a> 
      </div>
      {/* <button onClick={()=>signOut(auth)}>logout</button> */}
    </div>
  )
}

export default Navbar