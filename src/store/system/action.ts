import { SystemActionTypes } from '../../types/system'

export function setUsername (v: string): SystemActionTypes {
    return {
        type: "SET_USERNAME",
        payload: {
            username: v
        }
    }
}