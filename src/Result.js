import React, {Component} from 'react';
import './Result.scss';
class List extends Component {
    render () {
        const count = this.props.itemList.length;
        const Result = (item) => {
            if (count == 0) return 0;
            // const priceList = item.map((key, i) => [key.price]);
            const priceList = item.map((key, i) => {
                const rowTotalPrice = key.price * key.count;
                return rowTotalPrice;
            });

            return priceList.reduce((a, b) => {
                return +a + +b;
            });
        }

        return (
            <div className="cpt-result">
                <span className="result-count">
                    총 {count}개
                </span>
                <span className="result-price">
                    {Result(this.props.itemList)}원
                </span>
            </div>
        )
    }
}
export default List;
