import React from 'react'
import Button from '../../common/button'
import Input from '../../common/input'
import { UpdateMessageParam } from '../../App'

interface ChatInterfaceProps {
    updateMsg: (e: UpdateMessageParam) => void
    sendMsg: () => void
    msg: string
    username: string
}

const ChatInterface = (props: ChatInterfaceProps) => {
    const {
        updateMsg,
        msg,
        sendMsg,
        username
    } = props

    const onEnterPress = (e: React.KeyboardEvent<any>) => {
        if (e.key === "Enter") {
          sendMsg();
        }
    }

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>{`your name: ${username}`}</div>
            <div>
                <Input
                    onChange={updateMsg}
                    onKeyPress={onEnterPress}
                    value={msg}
                />
                <Button
                    onClick={sendMsg}
                >send</Button>
            </div>
        </div>
    )
}

export default ChatInterface