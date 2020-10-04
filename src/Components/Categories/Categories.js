import React from 'react';
import './Categories.css';
import newEvent from '../../Images/NewEvent.png';
import { useHistory } from 'react-router-dom';

const Categories = (props) => {

    const {img, bgColor, title, id} = props.category;
    const history = useHistory();
    const gotoRegistration = () => {
        history.push("/registration/"+id);
    }

    return (
        <div onClick={gotoRegistration} className="col-3">
            <div className="card category-card text-white">
                <img style={{ width: "270px" }} className="card-img-top" src={img || newEvent} alt="" />
                <div className="card-footer text-center" style={{ backgroundColor: bgColor || "orange" }}>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;