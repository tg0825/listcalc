import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const ListItem = props => {
    const handleClickCopy = index => {
        const cloneItem = Object.assign({}, this.state.itemList[index]);

        this.setState({
            itemList: update(this.state.itemList, {
                $splice: [[index + 1, 0, cloneItem]]
            })
        });
    };

    const handleRemove = () => {};

    const { i, k } = this.props;

    return (
        <div key={i} className="row">
            <div className="cell cell-number">{i + 1}</div>
            <div className="cell cell-name">
                <input
                    placeholder="이름"
                    name="name"
                    type="text"
                    value={k.name}
                    required
                    onChange={e => this.handleChange(e, i)}
                />
            </div>
            <div className="cell cell-type">
                <input
                    placeholder="type"
                    name="type"
                    type="text"
                    value={k.type}
                    required
                    onChange={e => this.handleChange(e, i)}
                />
            </div>
            <div className="cell cell-price">
                <input
                    placeholder="금액"
                    name="price"
                    type="text"
                    value={k.price}
                    required
                    onChange={e => this.handleChange(e, i)}
                />
            </div>
            <div className="cell cell-count">
                <input
                    placeholder="count"
                    name="count"
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={k.count}
                    required
                    onChange={e => this.handleChange(e, i)}
                />
            </div>
            <div className="cell cell-button">
                <button type="button" onClick={e => handleClickCopy(i)}>
                    <i className="fa fa-clipboard" aria-hidden="true" />
                </button>
            </div>
            <div className="cell cell-button">
                <button type="button" onClick={e => handleRemove(e, i)}>
                    <i className="fa fa-trash" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default ListItem;
