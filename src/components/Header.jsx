import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { userAdmin } from '../check'
import {TbDiscountCheckFilled} from 'react-icons/tb'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
const Header = () => {
    const {currentUser} =useContext(AuthContext)
    const checkAdmin = () => {
        return userAdmin.includes(currentUser.uid);
      }
    const [profile,setProfile]=useState(false)
  return (
    <div className='header'>
        <div className="profile">
        <div className="info">
        <img onClick={()=>{setProfile(true)}} src={currentUser.photoURL} alt="" />
        <span>
          <div>
            {currentUser.displayName}
            {checkAdmin() ? (
              <TbDiscountCheckFilled className="check-prem anim" />
            ) : (
              ""
            )}
          </div>
          <span
            onClick={() => {
              document.querySelector('.modal').classList.add('active')
            }}
          >
            {currentUser.email}
    
          </span>
        </span>
        </div>
        <div className="logout">
        <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>
      <div className={`modal_profile ${profile ? 'active' : ""}`}>
        <div onClick={()=>{setProfile(false)}} className="close">
          <MdOutlineClose/>
        </div>
        <img src={currentUser.photoURL} alt="" />
        <div className="prof_info">
          Your id :  <span onClick={()=> navigator.clipboard.writeText(currentUser.uid)}> {currentUser.uid}</span>
        </div>
        <div className="prof_info">
           Your email : <span onClick={()=> navigator.clipboard.writeText(currentUser.email)}> {currentUser.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Header