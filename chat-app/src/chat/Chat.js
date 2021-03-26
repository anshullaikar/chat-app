import React from "react"
import {ChannelList} from "./ChannelList"
import './chat.scss'
import MessagePanel from "./MessagePanel"

export class Chat extends React.Component{

    state = {
        channels: [{id: 1, name: "first", participants: 10}]
    }

    render(){
        return (
            <div className = "chat-app">
                <ChannelList channels ={this.state.channels}/>
                <MessagePanel/>
            </div>
        )
    }
}

export default Chat