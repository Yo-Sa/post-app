// import axios from "axios";
// import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";




export const Home = () => {
    
    return (
        <div>
            <header>
                <nav className='nav'>
                    <Link to="/" className='home'>home</Link>
                    <Link to="/create" className='create'>create</Link>
                </nav>
            </header>
            <h1>Home</h1>
            
        </div>
    )
}

