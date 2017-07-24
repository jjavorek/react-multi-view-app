import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';


class App extends Component {
  constructor(){
    super();

    this.state = {
      page: 'about' //either 'home' or 'about'
    }

  // bindings
  this.goToHome = this.goToHome.bind(this);
  this.goToAbout = this.goToAbout.bind(this);
  this.goToPage = this.goToPage.bind(this);


  }

    goToPage(nextPage){
    this.setState({
      page: nextPage
    });
  }
  
  goToHome(){
    this.setState({
      page: 'home'
    });
  }

  goToAbout(){
    this.setState({
      page: 'about'
    });
  }
  
  render() {
    let content;


    if(this.state.page === 'home'){
      content = <Home />;
    }

    else if(this.state.page === 'about'){
      content = <About />;
    }


    return (
      <div className="App">
        <nav>
          <h2 onClick={ () => {this.goToPage('home')}} > HOME </h2>
          <h2 onClick={ () => {this.goToPage('about')}}> ABOUT </h2>
        </nav>
        {content}
      </div>
    );
  }
}


export default App;
