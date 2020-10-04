import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Categories from '../Categories/Categories';

const Home = () => {
   
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [categories.length]);

    return (
        <div className="home-container">
            <div className="container">
            <Navbar/>
            <div className="text-center">
                <h1 className="mt-5">I GROW BY HELPING PEOPLE IN NEED</h1>
                <input type="search" value="Search..." name="" id=""/>
                <input type="submit" value="Search"/>
            </div>
            <div className="row">
                {
                    categories.map(category => <Categories key={category.id} category={category} />)
                }
            </div>
        </div>
        </div>
    );
};

export default Home;