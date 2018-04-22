import React, {Component} from 'react';
import './Input.scss';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            count: 1,
            price: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // example
    componentDidUpdate(prevProps, prevState) {
        if (this.state.value > prevState.value) {
            this.foo();
        }
    }

    handleChange(e) {
        let newItem = {};
        newItem[e.target.name] = e.target.value;

        // 갯수는 0개 불가
        if (e.target.name === 'count' && e.target.value === '0') {
            newItem[e.target.name] = 1;
        }

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
                count: 1,
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

                <div className="input-text input-count">
                    <input
                        placeholder="count"
                        name="count"
                        type="number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={this.state.count}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        ref={ref => this.count = ref}
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
