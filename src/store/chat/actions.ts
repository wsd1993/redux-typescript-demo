import { Message, ChatActionTypes } from '../../types/chat'

export function sendMsg(msg: Message): ChatActionTypes {
    return {
        type: "SEND_MESSAGE",
        payload: msg
    }
}

export function deleteMsg(timestamp: Date): ChatActionTypes {
    return {
        type: "DELETE_MESSAGE",
        timestamp
    }
}