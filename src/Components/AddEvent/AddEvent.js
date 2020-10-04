import React, { useState } from 'react';
import './AddEvent.css';

const AddEvent = () => {

    const [event, setEvent] = useState({})

    const handleBlur = e => {
        e.target.name === "title" && setEvent({...event, title: e.target.value});
        e.target.name === "date" && setEvent({...event, date: e.target.value});
        e.target.name === "description" && setEvent({...event, description: e.target.value});
    }

    const addCategory = e => {
        fetch('http://localhost:5000/addCategories', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(event)
        })

        e.preventDefault();
    }

    return (
        <>
            <h6>Add event</h6>
            <div className="p-4 mt-4" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="bg-white p-3 rounded-lg">
                    <form onSubmit={addCategory}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="title">Event title</label>
                                <input onBlur={handleBlur} type="text" name="title" className="form-control" id="title"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="date">Date</label>
                                <input onBlur={handleBlur} type="date" name="date" className="form-control" id="date"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="description">Description</label>
                                <input onBlur={handleBlur} type="text" name="description" className="form-control" id="description"/>
                            </div>
                        </div>
                        <input className="bg-primary border-0 text-white rounded-sm pr-3 pl-3 pt-1 pb-1" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddEvent;