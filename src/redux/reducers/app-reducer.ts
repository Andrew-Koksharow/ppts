
const INITIALIZED = 'INITIALIZED';

type InitialStateType = {
    initialized: boolean;
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }


}

export default appReducer;