import React, {Component} from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleChange(e) {
        let newItem = {};
        newItem[e.target.name] = e.target.value;
        this.setState(newItem);
    }

    handleButtonClick() {
        this.props.inputSubmit(this.state);
        this.setState({
            name: '',
            price: ''
        });
    }

    render() {
        return(
            <div>
                <input
                    placeholder="이름"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="금액"
                    name="price"
                    type="text"
                    value={this.state.price}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    onClick={this.handleButtonClick}
                >
                    submit
                </button>
            </div>
        );
    }
}
export default Input;
