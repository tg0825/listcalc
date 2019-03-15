import React, { Component } from 'react';
import List from './List';
import Result from './Result';
import Input from './Input';
import InputType from './InputType';
import update from 'immutability-helper';
import './App.scss';

import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.inputSubmit = this.inputSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleClone = this.handleClone.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);

        this.state = {
            itemList: [
                // {
                //     name: '커피',
                //     price: '1000'
                //     type: 'dec'
                //     ea: 1
                // },
            ],
            totalPrice: 0,
            selectedType: 'dec'
        };
    }

    getLocalStorage() {
        const itemList = localStorage.itemList;

        if (itemList) {
            this.setState({
                itemList: JSON.parse(itemList)
            });
        } else {
            localStorage.itemList = JSON.stringify(this.state.itemList);
        }
    }

    // 1. 돔 전, 돔 처리 불가
    componentWillMount() {
        if (this.state.itemList.length === 0) {
        }
        this.getLocalStorage();
    }

    // 6. 업데이트 후
    componentDidUpdate(prevProps, prevState) {
        // 이전 값과 지금 값을 비교
        if (
            JSON.stringify(prevState.itemList) !==
            JSON.stringify(this.state.itemList)
        ) {
            localStorage.itemList = JSON.stringify(this.state.itemList);
        }
    }

    inputSubmit(item) {
        if (this.state.selectedType === 'dec') {
            item.price *= -1;
        }

        this.setState({
            itemList: [...this.state.itemList, item]
        });
    }

    handleRemove(e, index) {
        this.setState({
            itemList: update(this.state.itemList, {
                $splice: [[index, 1]]
            })
        });
    }

    handleClone(index) {
        const cloneItem = Object.assign({}, this.state.itemList[index]);

        this.setState({
            itemList: update(this.state.itemList, {
                $splice: [[index + 1, 0, cloneItem]]
            })
        });
    }

    handleEdit(name, value, index) {
        this.setState({
            itemList: update(this.state.itemList, {
                [index]: {
                    [name]: { $set: value }
                }
            })
        });
    }

    handleTypeChange(type) {
        this.setState({
            selectedType: type
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <List
                    itemList={this.state.itemList}
                    handleEdit={this.handleEdit}
                    handleRemove={this.handleRemove}
                    handleClone={this.handleClone}
                />
                <div className="bottom">
                    <Result itemList={this.state.itemList} />
                    <InputType handleTypeChange={this.handleTypeChange} />
                    <Input
                        inputSubmit={this.inputSubmit}
                        selectedType={this.state.selectedType}
                    />
                </div>
            </div>
        );
    }
}

const con = connect(state => ({
    input: state.input
}))(App);
export default con;
