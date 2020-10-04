import React, { useState, useEffect } from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Images/Group 1329.png';
import { Link } from 'react-router-dom';
import VolunteerList from '../VolunteerList/VolunteerList';
import AddEvent from '../AddEvent/AddEvent';

const Admin = () => {
    
    const [state, setState] = useState(true);

    return (
        <div className="admin">
            <div className="row">
                <div className="col-auto">
                    <Link to='/'>
                        <img width="150px" src={logo} alt="" />
                    </Link><br/>
                    <a onClick={() =>setState(true)}><FontAwesomeIcon className="add-icons mr-3" icon={faUserFriends} /> Volunteer register list</a><br/>
                    <a onClick={() =>setState(false)}><FontAwesomeIcon className="add-icons mr-3" icon={faPlus} /> Add event</a>
                </div>
                <div className="col register-list">
                    { state ? <VolunteerList/> : <AddEvent/>}
                </div>
            </div>
        </div>
    );
};

export default Admin;