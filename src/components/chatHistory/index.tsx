import React from 'react'
import { ChatHistoryProps } from '../../types/chat'
import dayjs from 'dayjs'
import { TIMESTAMP } from '../../config'
import Container from './container'

const ChatHistroy: React.FunctionComponent<ChatHistoryProps> = ({ messages }) => {
    return (
        <Container>
            {
                messages.map((item: any) => (
                    <div key={item.timeStamp}>
                        <h5>
                            <span style={{ marginRight: '10px' }}>{item.user}</span>
                            <span>
                                {dayjs(item.timeStamp).format(TIMESTAMP)}
                            </span>
                        </h5>
                        <p>{item.msg}</p>
                    </div>
                ))
            }
        </Container>
    )
}

export default ChatHistroy