import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { userAdmin } from "../check";
import {MdClose} from 'react-icons/md'
import Chats from "./Chats";
import ModalChat from "./ModalChat";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
const Advansed = () => {
  const { currentUser } = useContext(AuthContext);
  const checkAdmin = () => {
    return userAdmin.includes(currentUser.uid);
  }
  const [modal, setModal] = useState();
  return (
    <div className="advanced">
      <div className="profile">
        <img onClick={()=>{setModal(true)}} src={currentUser.photoURL} alt="" />
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
            {console.log(currentUser)}
    
          </span>
        </span>
      </div>
      <div className="description">
     
         <span>
          Your id : {currentUser.uid}<br/>
          Your email : {currentUser.email} <br/><br />
         Creator : Feruzbek Jumaboyev 
         <br/>
         Used : React Js Firebase Sass 
         <br/>
         Storage : Firebase
         <br/>
         </span>
        
        <div onClick={()=>signOut(auth)} className="logOut">
            logout
        </div>
      </div>
      <div className={`prof_modal ${modal ? 'active' : ""}`}>
        <img src={currentUser.photoURL} alt="" />
        <div onClick={()=>{setModal(false)}} className="close">
          <MdClose/>
        </div>
      </div>
    </div>
  );
};

export default Advansed;
