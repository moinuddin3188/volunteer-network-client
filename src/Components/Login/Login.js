import React, { useContext } from 'react';
import './Login.css';
import logo from '../../Images/Group 1329.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase/Firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const user = result.user;
                const newUserInfo = {name: user.displayName, email: user.email}
                setUserInfo(newUserInfo);
                history.replace(from);
            })
            .catch(function (error) {
                var errorMessage = error.message;
            });
    }

    return (
        <>
            <div className="text-center">
                <Link to="/">
                    <img style={{ width: "150px", margin: "30px 0px" }} src={logo} alt="" />
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <div className="login text-center">
                    <h5>Login With</h5>
                    <button onClick={handleGoogleSignIn}><FontAwesomeIcon color="red" style={{marginRight: "150px"}} icon={faSignInAlt} />Continue with Google</button>
                    <p>Don't have an account? <a href="">Create an account</a></p>
                </div>
            </div>
        </>
    );
};

export default Login;