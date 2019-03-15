// Actions
const GET = 'list/GET';

const initialState = {
    itemList: [
        // {
        //     name: '커피',
        //     price: '1000'
        //     type: 'dec'
        //     ea: 1
        // },
    ]
};

// Action 생성자
// export function inputCreate(widget) {
//     return { type: CREATE, widget };
// }

export const onGet = () => ({
    type: CREATE
});

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
    case GET:
        return state.itemList;
    default:
        return state.itemList;
    }
}
