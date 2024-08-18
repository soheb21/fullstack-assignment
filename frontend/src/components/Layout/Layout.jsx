import React from 'react'
import "./Layout.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (

        <div className='container'>
            <Navbar />
            {children}
            <Footer />

        </div>
    )
}

export default Layout