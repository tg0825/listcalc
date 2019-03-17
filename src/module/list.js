// Actions
const GET = 'list/GET';
const CREATE = 'list/CREATE';

const initialState = {
    itemList: [
        // { name: '커피', price: '1000', count: 1 },
    ]
};

// Action 생성자
export const onGet = () => ({
    type: CREATE
});

export const onCreate = data => ({
    type: CREATE,
    payload: data
});

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET:
        return state;
    case CREATE:
        const { name, price, count } = action.payload;
        return {
            itemList: [
                ...state.itemList,
                {
                    name,
                    price,
                    count
                }
            ]
        };
    default:
        return state;
    }
}
