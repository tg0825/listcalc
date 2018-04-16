import React, { Component } from 'react';
import List from './List';
import Result from './Result';
import Input from './Input';
// import { Map, List } from 'immutable';
import update from 'immutability-helper';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.inputSubmit = this.inputSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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
        });
    }

    handleEdit(name, value, index) {
        this.setState({
            itemList: update(
                this.state.itemList,
                {
                    [index]: {
                        name: {$set: value},
                    }
                }
            )
        })
    }

    render() {
        return (
            <div className="App">
                <List
                    itemList={this.state.itemList}
                    handleEdit={this.handleEdit}
                />
                <Result itemList={this.state.itemList}/>
                <Input inputSubmit={this.inputSubmit}/>
            </div>
        );
    }
}

export default App;
