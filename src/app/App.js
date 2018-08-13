import React, { Component } from 'react';

import './App.css';
import MainContent from '../components/MainContent';


class App extends Component {

  componentWillMount() {
    //this.props.getRepositoriesByUsername("Facebook");
  }

  render() {

    
    return (
      <div className="App">
       <MainContent/>
        
      </div>
    );
  }
}



export default App