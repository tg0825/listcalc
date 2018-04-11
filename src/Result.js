import React, {Component} from 'react';
class List extends Component {
    render () {
        const Result = (item) => {
            var priceList = item.map((key, i) => [key.price]);
            return priceList.reduce((a, b) => {
                return +a + +b;
            });
        }

        return (
            <div>
                {Result(this.props.itemList)}
            </div>
        )
    }
}
export default List;
