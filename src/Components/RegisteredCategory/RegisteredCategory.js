import React, { useEffect, useContext, useState } from 'react';
import './RegisteredCategory.css';
import Navbar from '../Navbar/Navbar';
import img from '../../Images/babySit.png';
import { UserContext } from '../../App';

const RegisteredCategory = () => {
 
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        fetch(`https://ancient-headland-50156.herokuapp.com/volunteerInfo/${userInfo.email}`)
        .then(res => res.json())
        .then(data => setRegistrations(data))
    }, [registrations.length])

    const deleteRegistration = id => {

        fetch(`https://ancient-headland-50156.herokuapp.com/deleteRegistration/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            
        })

        fetch(`https://ancient-headland-50156.herokuapp.com/volunteerInfo/${userInfo.email}`)
        .then(res => res.json())
        .then(data => setRegistrations(data))
    }

    return (
        <div className="container ">
            <Navbar />
            <div className="row mt-5">
                {
                    registrations.map(category =>
                        <div className="col-6 mb-3">
                            <div className="registered-category">
                                <div className="row">
                                    <div className="col-auto">
                                        <img style={{ width: "150px" }} src={category.img} alt="" />
                                    </div>
                                    <div className="col">
                                        <h5>{category.title}</h5>
                                        <h5>{category.date}</h5>
                                        <div className="row">
                                            <div className="col-auto ml-auto">
                                                <button onClick={() => deleteRegistration(category._id)} className="btn btn-light mt-5">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RegisteredCategory;