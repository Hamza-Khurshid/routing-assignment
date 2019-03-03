import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import TodayNews from './TodayNews';
import PreviousNews from './PreviousNews';

export default class News extends Component {
    render() {
        return (
            <div>
                <h1>News</h1>
                <div className='div1'>
                    <Link to='/news/today'>Today</Link> <br />
                    <Link to='/news/prev'>Previous</Link>
                </div>

                <div className='div2'>
                    <Route path='/news/today' component={TodayNews} />
                    <Route path='/news/prev' component={PreviousNews} />
                </div>
            </div>
        )
    }
};