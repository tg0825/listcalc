import React, { Component } from 'react';
import './InputType.scss';
class Input extends Component {
    constructor(props) {
        super(props);
        this.handleActive = this.handleActive.bind(this);

        this.state = {
            type: 'dec'
        };
    }

    handleActive(e) {
        const type = e.currentTarget.dataset.type;
        this.setState({
            type: type
        });
        this.props.handleTypeChange(type);
    }

    render() {
        const Buttons = (
            <div>
                <button
                    data-type="inc"
                    className={this.state.type === 'inc' ? 'active' : ''}
                    onClick={this.handleActive}
                >
                    <i className="fa fa-lg fa-plus-circle" aria-hidden="true" />
                    increase
                </button>
                <button
                    data-type="dec"
                    className={this.state.type === 'dec' ? 'active' : ''}
                    onClick={this.handleActive}
                >
                    <i
                        className="fa fa-lg fa-minus-circle"
                        aria-hidden="true"
                    />
                    decrease
                </button>
            </div>
        );
        return <div className="cpt-inputtype">{Buttons}</div>;
    }
}
export default Input;
