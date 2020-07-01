export const SEND_MESSAGE = "SEND_MESSAGE"
export const DELETE_MESSAGE = "DELETE_MESSAGE"

export interface Message {
    user: string
    msg: string
    timeStamp: Date
}

export interface ChatHistoryProps {
    messages: Message[]
}

interface SendMsgAction {
    type: typeof SEND_MESSAGE,
    payload: Message
}

interface DeleteMsgAction {
    type: typeof DELETE_MESSAGE,
    timestamp: Date
}

export type ChatActionTypes = SendMsgAction | DeleteMsgAction
