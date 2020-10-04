import React, { useContext, useState, useEffect } from 'react';
import './Registration.css';
import logo from '../../Images/Group 1329.png';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Registration = () => {

    const { id } = useParams();
    const [category, setCategory] = useState({})
    const history = useHistory()

    useEffect(() => {
        fetch(`https://ancient-headland-50156.herokuapp.com/category/${id}`)
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [id]);

    const [userInfo, setUserInfo] = useContext(UserContext);
    const[volunteerInfo, setVolunteerInfo] = useState({...userInfo})

    const handleBlur = e => {
        e.target.name === "date" && setVolunteerInfo({...volunteerInfo, date: e.target.value, title: category.title, img: category.img});
        e.target.name === "description" && setVolunteerInfo({...volunteerInfo, description: e.target.value})
    }

    const handleRegistration = e => {
        
        fetch('https://ancient-headland-50156.herokuapp.com/addVolunteerInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerInfo)
        })
        history.push('/registrations')
        e.preventDefault();
    }

    return (
        <>
            <div className="text-center">
                <Link to="/">
                    <img style={{ width: "150px", margin: "30px 0px" }} src={logo} alt="" />
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <div className="registration-form">
                    <form onSubmit={handleRegistration}>
                        <h5 className="mb-5">Register as a Volunteer</h5>
                        <input type="text" name="name" value={userInfo.name} placeholder="Full Name" />
                        <br />

                        <input type="email" name="email" value={userInfo.email} placeholder="Email" />
                        <br />

                        <input onBlur={handleBlur} type="date" name="date" placeholder="Date"/>
                        <br />

                        <input onBlur={handleBlur} type="text" name="description" placeholder="Description"/>
                        <br />

                        <input type="text" name="title" value={category.title} placeholder="" />
                        <br />

                        <input className="bg-primary text-white" type="submit" value="Registration" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;