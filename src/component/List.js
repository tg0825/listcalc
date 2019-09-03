import React, { Component } from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux';

import ListItem from './ListItem';

import './List.scss';

class List extends Component {
    handleEdit(name, value, index) {
        this.setState({
            itemList: update(this.state.itemList, {
                [index]: {
                    [name]: { $set: value }
                }
            })
        });
    }

    handleChange = (e, i) => {
        const eTarget = e.currentTarget;
        const name = eTarget.name;
        const value = eTarget.value;

        this.props.handleEdit(name, value, i);
    };

    render() {
        const map = item => {
            return item.map((k, i) => <ListItem i={i} k={k} />);
        };

        return (
            <div
                className={
                    'cpt-list ' + (this.props.itemList.length ? '' : 'empty')
                }
            >
                <div className="list-inner">{map(this.props.itemList)}</div>

                <div className="list-inner-empty">항목을 입력해주세요. :)</div>
            </div>
        );
    }
}

const con = connect(
    state => ({
        itemList: state.list.itemList
    }),
    dispatch => ({})
)(List);

export default con;
