import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as R, Link, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import News from './components/News.jsx';
import Colleges from './components/Colleges.jsx';
import Home from './components/Home.jsx';
import Course from './components/Course.jsx';
import User from './components/User.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <R>
          <div>
            <Header className='header'/>
            <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/colleges' component={Colleges} />
            <Route path='/course' component={Course} />
            <Route path='/user' component={User} />
          </div>
        </R>
      </div>
    );
  }
}

export default App;
