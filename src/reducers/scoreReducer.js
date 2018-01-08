const initialScore = 0;

const scoreReducer = (state = initialScore, action) => {
    switch(action.type){

        case 'SET_SCORE':
        return state + 1;

        default:
        return state
    }
}

export default scoreReducer