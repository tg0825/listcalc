import React, {Component} from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, i) {
        const eTarget = e.currentTarget;
        const name = eTarget.name;
        const value = eTarget.value;
        const index = i;

        this.props.handleEdit(name, value, index);
    }

    render () {
        const map = (item) => {
            return item.map((k, i) => (
                <div
                    key={i}
                >
                    <input
                        placeholder="이름"
                        name="name"
                        type="text"
                        value={k.name}
                        onChange={(e)=>this.handleChange(e, i)}
                    />
                    <input
                        placeholder="금액"
                        name="price"
                        type="text"
                        value={k.price}
                        onChange={this.handleChange}
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
