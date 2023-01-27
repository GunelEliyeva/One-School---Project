import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./index.scss";

const Header = () => {
  return (
   
        <div className="hedaer">
            <div className='logo'><Link to={"/"}><h1>OneSchool</h1></Link></div>
            <div className='route'>
                
                    <ul><li><NavLink to={"/"}>Home</NavLink></li></ul>
                    <ul><li><NavLink to={"/"}>Courses</NavLink></li></ul>
                    <ul><li><NavLink to={"/"}>Programs</NavLink></li></ul>
                    <ul><li><NavLink to={"/"}>Teachers</NavLink></li></ul>
                    <ul><li><NavLink to={"/add"}>Add Teachers</NavLink></li></ul>
                
            </div>
            <div className='nav-btn'>
                <button><p>CONTACT US</p></button>
            </div>
        </div>

    
  )
}

export default Header