import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import './HomePage.css'; 

const About = (props) => {
    console.log(props)
    return (
        <div>
            <Navbar user={props.user} handleLogout={props.handleLogout}/>
            <footer className="header-footer"></footer> 
        </div>

    );
}; 

export default About;