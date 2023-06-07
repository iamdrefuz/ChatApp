import React, { useContext } from "react";
import Messages from "./Messages";
import { userAdmin } from "../check";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {TbDiscountCheckFilled} from 'react-icons/tb'
import {BsMessenger} from 'react-icons/bs'
import { useState } from "react";
import {CgClose} from 'react-icons/cg'
import ModalChat from "./ModalChat";
import {MdOutlineClose} from 'react-icons/md'
const Chat = () => {
  const checkAdmin =()=>{
    return(
      userAdmin.includes(data.user.uid)
    )
  }
  const [modal,setModal] =useState(false)
  const { data } = useContext(ChatContext);
  const [profModal, setProfModal] =useState(false)
  return (
    <div className="chat">
      <div  className={`prof_modal ${ profModal === true ? 'active' : ''}`}>{data.user.photoURL ? <img src={data.user.photoURL} alt="" /> : ''}
      <div onClick={()=>{setProfModal(false)}} className="close"><CgClose/></div>
      </div>
      <div className="chatInfo">
        {console.log(profModal)}
        <span onClick={()=>{setProfModal(true)}}> {data.user.photoURL ? <img src={data.user.photoURL} />  : 'Drefuz chat ..'}{data.user.displayName}{checkAdmin() ? <TbDiscountCheckFilled/> : ''} </span>
        <BsMessenger className="chat_link" onClick={()=>{
          document.querySelector('.modal').classList.add('active')          
        }}/>
      </div>
      <Messages />
      <Input/>
      <div className={`modal ${modal ? "active" : ""}` }>
        <ModalChat/>
        <div className="close" onClick={()=>{
          document.querySelector('.modal').classList.remove('active')
        }}><MdOutlineClose/>
        </div>
      </div>
    </div>
  );
};

export default Chat;
