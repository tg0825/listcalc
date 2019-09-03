import React, { Component } from 'react';
import { onCreate } from '../module/list';
import { connect } from 'react-redux';

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
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.handleKeyPressEnter = this.handleKeyPressEnter.bind(this);
    }

    // example
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.value > prevState.value) {
    //         this.foo();
    //     }
    // }

    handleChange(e) {
        let newItem = {};
        newItem[e.target.name] = e.target.value;

        // 갯수는 0개 불가
        if (e.target.name === 'count' && e.target.value === '0') {
            newItem[e.target.name] = 1;
        }

        this.setState(newItem);
    }

    // 전송 클릭
    handleClickSubmit() {
        // 값이 비어 있으면 해당 위치로 포커스 이동
        const isInputEmpty = Object.keys(this.state).some((index, value) => {
            if (this.state[index] === '') {
                this[index].focus();
                return true;
            }
            return false;
        });

        if (!isInputEmpty) {
            this.props.onCreate(this.state);
            // this.props.inputSubmit(this.state);
            this.setState({
                name: '',
                count: 1,
                price: ''
            });
            this.name.focus();
        }
    }

    // 엔터 핸들러
    handleKeyPressEnter(e) {
        if (e.charCode === 13) {
            this.handleClickSubmit();
        }
    }

    render() {
        return (
            <div className="cpt-input">
                <div className="input-text input-name">
                    <input
                        placeholder="이름"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPressEnter}
                        ref={ref => (this.name = ref)}
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
                        onKeyPress={this.handleKeyPressEnter}
                        ref={ref => (this.price = ref)}
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
                        onKeyPress={this.handleKeyPressEnter}
                        ref={ref => (this.count = ref)}
                        required
                    />
                </div>

                <div className="btn-submit">
                    <button type="submit" onClick={this.handleClickSubmit}>
                        submit
                    </button>
                </div>
            </div>
        );
    }
}

// export default connect(
//     state => ({
//         post: state.post
//     }),
//     // state 안의 state 값을 props로 연결합니다.
//     dispatch => ({
//         getShop: num => {
//             dispatch(actions.getShop(num));
//         }
//     })
// )(ShopViewContainer);

//     const mapDispatchToProps = dispatch => ({
//   changeColor: color => dispatch(changeColor(color)),
// });

const con = connect(
    state => ({
        input: state.input
    }),
    dispatch => ({
        onCreate: item => {
            return dispatch(onCreate(item));
        }
    })
)(Input);
export default con;
