import React, { Component } from 'react'

export class MessagePanel extends Component {
    render() {

        let list = 
            <div className = "no-content-message">
                There are no messages to show
            </div>
        if(this.props.channel && this.props.channel.messsages)
        {
            list = this.props.channel.messages.map(
                m => (
                <message 
                key={m.id} 
                id={m.id} 
                senderName = {m.senderName} 
                text = {m.text}/>
                ));
        }
        return (
            <div className = "messages-panel">
                <div className="messages-list">{list}</div>
                <div className="messages-input">
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        )
    }
}

export default MessagePanel
