import React from 'react';
import {Link} from 'react-router-dom'

export default props => (
    <div className='header-container'>
        <h1>React Routing</h1>
        <nav>
            <Link className='nav-links' to='/'>Home</Link>
            <Link className='nav-links' to='/about'>About</Link>
            <Link className='nav-links' to='/contact'>Contact</Link>
        </nav>
    </div>
)