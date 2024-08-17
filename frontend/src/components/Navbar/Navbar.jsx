import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <Link to={"/"}>
                    <img src="vite.svg" alt="logo" />
                </Link>

                <span>Abstract</span> |
                <p>Help Center</p>
            </div>
            <Link to={"/add"}>
                <div className="nav-right">
                    <button>
                        Submit a request
                    </button>

                </div>
            </Link>
        </div>
    )
}

export default Navbar