import React, {Component} from 'react';
class List extends Component {
    render () {
        const map = (item) => {
            console.log(item);
            return item.map((k, i) => (
                <div key={i}>
                    <input
                        placeholder="이름"
                        name="name"
                        type="text"
                        readOnly
                        value={k.name}
                    />
                    <input
                        placeholder="금액"
                        name="price"
                        type="text"
                        readOnly
                        value={k.price}
                    />
                </div>
            ));
        }

        return (
            <div>
                {map(this.props.itemList)}
            </div>
        )
    }
}
export default List;
