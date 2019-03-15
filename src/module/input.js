// Actions
const CREATE = 'input/CREATE';

const initialState = {
    name: '',
    price: '',
    count: 1
};

// Action 생성자
// export function inputCreate(widget) {
//     return { type: CREATE, widget };
// }

export const inputCreate = data => ({
    type: CREATE,
    payload: data
});

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case CREATE:
        const { name, price, count } = action.payload;
        return {
            name,
            price,
            count
        };
    default:
        return state;
    }
}
