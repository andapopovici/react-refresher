export default function noteReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, Object.assign({}, action.note)];
        default:
            return state;    
    }
}