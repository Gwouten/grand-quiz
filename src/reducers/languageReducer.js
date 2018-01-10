const languageReducer = (state = '', action) => {
    switch(action.type) {

        case 'SET_LANGUAGE':
        return state = 'fr';

        default:
         return state;
    }
}

export default languageReducer