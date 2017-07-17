import React, { Component } from 'react';
import SearchBar from "./containers/search_bar";
import WeatherList from "./containers/weather_list";
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <div>
                    <SearchBar />
                    <WeatherList/>
                </div>
            </div>
        );
    }
}

export default App;
