import React from 'react'
import "./Layout.css"
import Footer from '../../Footer/Footer'
import Navbar from '../Navbar/Navbar'

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