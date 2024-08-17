import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="nav-container">
         
            <div className="header-main">
                <h1>How Can We Help?</h1>
                <div className="search-bar">
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header