import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Result.scss';

class Result extends Component {
    render() {
        const count = this.props.list.length;
        const Result = item => {
            if (count == 0) return 0;
            // const priceList = item.map((key, i) => [key.price]);
            const priceList = item.map((key, i) => {
                const rowTotalPrice = key.price * key.count;
                return rowTotalPrice;
            });

            return priceList.reduce((a, b) => {
                return +a + +b;
            });
        };

        return (
            <div className="cpt-result">
                <span className="result-count">총 {count}개</span>
                <span className="result-price">
                    {Result(this.props.list)}원
                </span>
            </div>
        );
    }
}

const con = connect(state => ({
    list: state.list,
    result: state.result
}))(Result);

export default con;
