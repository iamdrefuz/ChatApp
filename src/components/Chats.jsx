import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { userAdmin } from "../check";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import {TbDiscountCheckFilled} from "react-icons/tb";
export const ModalContext = createContext()
const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const [modal,setModal] = useState( false )
  console.log(modal);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  

  return (
    
    <ModalContext.Provider value={modal}>
      <div className="chats" onClick={()=>{
        document.querySelector('.modal').classList.remove('active')
      }}>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
         
        >
      {
        console.log(chat[0])
      }
           {         
          console.log()
        }
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo" onClick={()=>{setModal(true)}}>
            {chat[1].userInfo.displayName.length > 16 ? <marquee><span>{chat[1].userInfo.displayName}{(userAdmin.includes((chat[1].userInfo.uid)))? <TbDiscountCheckFilled/> : ''}</span></marquee>: <span>{chat[1].userInfo.displayName}{(userAdmin.includes((chat[1].userInfo.uid)))? <TbDiscountCheckFilled/> : ''}</span>}
            <p>{chat[1].lastMessage?.text}</p>
            {console.log(chat)}
          </div>
        </div>
        
      ))}
    
    </div>
    </ModalContext.Provider>
    
  );
};

export default Chats;
