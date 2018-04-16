import React, {Component} from 'react';
import './Input.scss';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let newItem = {};
        newItem[e.target.name] = e.target.value;
        this.setState(newItem);
    }

    handleButtonClick() {
        const isInputEmpty = Object.keys(this.state).some((v, i) => {
            if (this.state[v] === '') {
                this[v].focus();
                return true;
            }
            return false;
        });

        if (!isInputEmpty) {
            this.props.inputSubmit(this.state);
            this.name.focus();
            this.setState({
                name: '',
                price: ''
            });
        }
    }

    handleKeyPress(e) {
        if (e.charCode === 13) {
            this.handleButtonClick();
        }
    }

    render() {
        return(
            <div className="cpt-input">
                <div className="input-text input-name">
                    <input
                        placeholder="이름"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        ref={ref => this.name = ref}
                        required
                    />
                </div>

                <div className="input-text input-price">
                    <input
                        placeholder="금액"
                        name="price"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={this.state.price}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        ref={ref => this.price = ref}
                        required
                    />
                </div>

                <div className="btn-submit">
                    <button
                        type="submit"
                        onClick={this.handleButtonClick}
                    >
                        submit
                    </button>
                </div>
            </div>
        );
    }
}
export default Input;
