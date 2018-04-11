import React, { Component } from 'react';
import List from './List';
import Result from './Result';
import Input from './Input';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.inputSubmit = this.inputSubmit.bind(this);
    }

    state = {
        itemList: [
            {
                name: '커피',
                price: '1000'
            },
            {
                name: '점심',
                price: '2000'
            },
            {
                name: '점심',
                price: '2000'
            }
        ],
        totalPrice: 0
    }

    inputSubmit(item) {
        this.setState({
            itemList: [...this.state.itemList, item]
        })
    }

    render() {
        return (
            <div className="App">
                <List itemList={this.state.itemList}/>
                <Result itemList={this.state.itemList}/>
                <Input inputSubmit={this.inputSubmit}/>
            </div>
        );
    }
}

export default App;
