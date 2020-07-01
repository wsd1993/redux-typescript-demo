import { ChatActionTypes, ChatHistoryProps, SEND_MESSAGE, DELETE_MESSAGE } from '../../types/chat'

const initialState: ChatHistoryProps = {
    messages: [{
        user: 'test01',
        msg: 'test content 01',
        timeStamp: new Date('2008-01-01')
    },
    {
        user: 'test02',
        msg: 'test content 02',
        timeStamp: new Date('2008-01-02')
    }]
}

export function chatReducer (
    state = initialState,
    action: ChatActionTypes
):ChatHistoryProps {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                messages: [...state.messages, action.payload]
            }
        }
        case DELETE_MESSAGE: {
            return {
                messages: state.messages.filter(msg => msg.timeStamp !== action.timestamp)
            }
        }
        default: {
            return state
        }
    }
}