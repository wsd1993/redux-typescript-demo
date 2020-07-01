import { SET_USERNAME, SystemActionTypes, SystemReducer } from '../../types/system'

const initialState:SystemReducer = {
    username: 'default username'
}

export function systemReducer (
    state = initialState,
    action: SystemActionTypes
): SystemReducer {
    switch (action.type) {
        case SET_USERNAME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return initialState
        }
    }
}