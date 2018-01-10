const languageReducer = (state = '', action) => {
    switch(action.type) {

        case 'SET_LANGUAGE':
        return state = action.lang;

        default:
         return state;
    }
}

export default languageReducer