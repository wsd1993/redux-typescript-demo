import React from 'react'
import ChatHistory from './components/chatHistory'
import ChatInterface from './components/chatInterface'
import { connect } from 'react-redux'
import { AppState } from './store'
import { Dispatch } from 'redux'
import * as actions from './store/chat/actions'
import { Message, ChatHistoryProps } from './types/chat'
import { SystemReducer } from './types/system'
import styled from 'styled-components'
import Title from './components/title'

interface T {
  chat: ChatHistoryProps
  system: SystemReducer
  sendMsg: (msg: Message) => void
}

const Container = styled.div`
  padding: 14px;
`

export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>

const { useState } = React

const App: React.FunctionComponent<T> = ({ chat, system, sendMsg }) => {
  const [curMsg, setCurMsg] = useState('')

  const handleMsgChange = (e: UpdateMessageParam) => {
    setCurMsg(e.currentTarget.value)
  }

  const handleMsgSend = () => {
    const timeStamp = new Date()
    const message: Message = {
      user: system.username,
      msg: curMsg,
      timeStamp
    }
    sendMsg(message)
    setCurMsg('')
  }

  return (
    <Container className="App">
      <Title />
      <ChatHistory messages={chat.messages} />
      <ChatInterface
        updateMsg={handleMsgChange}
        msg={curMsg}
        sendMsg={handleMsgSend}
        username={system.username}
      />
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  chat: state.chatReducer,
  system: state.systemReducer
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendMsg (msg: Message) {
      dispatch(actions.sendMsg(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
