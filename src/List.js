import React, {Component} from 'react';
import './List.scss';
class List extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, i) {
        const eTarget = e.currentTarget;
        const name = eTarget.name;
        const value = eTarget.value;

        this.props.handleEdit(name, value, i);
    }

    render () {
        const map = (item) => {
            return item.map((k, i) => (
                <div
                    key={i}
                    className="row"
                >
                    <div className="cell cell-number">
                        {i + 1}
                    </div>
                    <div className="cell cell-name">
                        <input
                            placeholder="이름"
                            name="name"
                            type="text"
                            value={k.name}
                            onChange={(e)=>this.handleChange(e, i)}
                        />
                    </div>
                    <div className="cell cell-price">
                        <input
                            placeholder="금액"
                            name="price"
                            type="text"
                            value={k.price}
                            onChange={(e)=>this.handleChange(e, i)}
                        />
                    </div>
                    <div className="cell cell-button">
                        <button
                            type="button"
                            onClick={(e)=>this.props.handleClone(i)}
                        ><i class="fa fa-clipboard" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="cell cell-button">
                        <button
                            type="button"
                            onClick={(e)=>this.props.handleRemove(e, i)}
                        ><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            ));
        }

        return (
            <div className={"cpt-list " + (this.props.itemList.length ? '' : 'empty')}>
                <div className="list-inner">
                    {map(this.props.itemList)}
                </div>

                <div className="list-inner-empty">
                    항목을 입력해주세요. :)
                </div>
            </div>
        )
    }
}
export default List;
