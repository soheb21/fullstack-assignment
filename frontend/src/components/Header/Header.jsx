import "./Header.css"

const Header = ({ setQuery }) => {

    return (
        <div className="nav-container">

            <div className="header-main">
                <h1>How Can We Help?</h1>
                <div className="search-bar">
                    <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Header