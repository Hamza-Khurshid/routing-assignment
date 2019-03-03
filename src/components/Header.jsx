import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/' className='myclass'>Home</Link>
                <Link to='/news' className='myclass'>News</Link>
                <Link to='/colleges' className='myclass'>Colleges</Link>
                <Link to='/course' className='myclass'>Course</Link>
                <Link to='/user' className='myclass'>User</Link>
            </div>
        )
    }
}
