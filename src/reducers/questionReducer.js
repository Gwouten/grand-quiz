const questionReducer = (state = 1, action) => {
    switch(action.type) {

        case 'NEXT_QUESTION':
        return state + 1;

        default:
        return state;
    }
}

export default questionReducer