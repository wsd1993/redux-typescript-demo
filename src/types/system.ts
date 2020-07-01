export const SET_USERNAME = "SET_USERNAME"

interface SetUsernameAction {
    type: typeof SET_USERNAME,
    payload: {
        username: string
    }
}

export interface SystemReducer {
    username: string
}

export type SystemActionTypes = SetUsernameAction