import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'

const VolunteerList = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/volunteerList')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    }, [])

    const deleteVolunteer = id => {

        fetch(`http://localhost:5000/deleteVolunteer/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            
        })

        fetch('http://localhost:5000/volunteerList')
        .then(res => res.json())
        .then(data => setVolunteers(data))
    }

    return (
        <>
           <h6>Volunteer register list</h6>
                    <div className="p-4 mt-4" style={{ backgroundColor: "#f0f0f0" }}>
                        <div className="bg-white p-3 rounded-lg">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registration data</th>
                                        <th>Volunteer list</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        volunteers.map(volunteer => 
                                        <tr>
                                            <td>{volunteer.name}</td>
                                            <td>{volunteer.email}</td>
                                            <td>{volunteer.date}</td>
                                            <td>{volunteer.title}</td>
                                            <td><FontAwesomeIcon onClick={() => deleteVolunteer(volunteer._id)} className="bg-danger text-white p-1 rounded icon" icon={faTrashAlt} /></td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> 
        </>
    );
};

export default VolunteerList;