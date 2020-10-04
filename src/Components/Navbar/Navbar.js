import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../Images/Group 1329.png'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} height="35" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto"></ul>
                <div className="navbar-text mr-5">
                    <Link to="/">Home</Link>
                </div>
                <div className="navbar-text mr-5">
                    Donation
                </div>
                <div className="navbar-text mr-5">
                    Events
                </div>
                <div className="navbar-text mr-5">
                    Blog
                </div>
                {   userInfo.name ?
                    <div className="navbar-text">
                        {userInfo.name}
                    </div>
                    :
                    <>
                        <button type="button" className="btn btn-primary mr-5">Register</button>
                        <Link to='/admin'>
                            <button type="button" className="btn btn-dark">Admin</button>
                        </Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Navbar;