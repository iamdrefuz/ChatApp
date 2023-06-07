import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Advansed from '../components/Advansed'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Header />
        <div className="main">
          <Advansed />
          <Chat />
          <Sidebar />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
