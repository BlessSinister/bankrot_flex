import React from 'react'
import logo from './img/logo.svg'

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="navbar-wrapper">
                    <div className="logo-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-burger-menu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                <div className="navbar-line"></div>
            </nav>
        )
    }
}
export default Navbar