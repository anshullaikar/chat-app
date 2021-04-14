import React, { Component } from 'react'
import {Message} from './Message';

export class MessagePanel extends Component {

    state = {
        text:""
    }

    componentDidMount = ()=>{
        
        console.log("Here checking for socket:",this.props.socket);
        console.log("Here checking for username:",this.props.username);
        this.props.socket.emit("connectMe",{username:this.props.username,category:this.props.category})
        this.props.socket.on("newMsg",(data)=>{
            console.log("Here checking for new Data:",data);
            if(data.id == this.props.currentChat.chat){
                
                this.setState({text:""});
                this.props.updateMessage(data);
            }
        })
    }

    changeText = (e)=>{
        console.log("Here checking for text: ",e.target.value);
        this.setState({text:e.target.value});
    }

    sendMsg = ()=>{
        console.log("Here sending message");
        let data = {
            id:this.props.currentChat.chat,
            text:this.state.text,
            username:this.props.username
        }
        console.log("The text is:",data);
        this.props.socket.emit("message",data);

    }


    showChats = ()=>{
        console.log("Showing",this.props.currentChat.chat);
        fetch('/getMessages?id='+this.props.currentChat.chat).
        then(res=>res.json())
        .then((result)=>{
            console.log("heyyyy",result);
            this.setState({messageList:result.messageList});
        })
    }

    render() {

        let list = 
            <div className = "no-content-message">
                There are no messages to show
            </div>
        if(this.props.currentChat && this.props.messageList.length)
        {
            list = this.props.messageList.map(
                m => (
                <Message 
                // key={m.id} 
                // id={m.id} 
                senderName = {m.username} 
                text = {m.text}/>
                ));
        }
        return (
            <div className = "messages-panel">
                <h1>{this.props.currentChat.person.username}</h1>
                {/* <h1>Hey Chat</h1> */}
                <div className="messages-list">{list}</div>
                <div className="messages-input">
                    <input type="text" name = "msg" onChange = {this.changeText} value = {this.state.text}/>
                    <button onClick = {this.sendMsg}>Send</button>
                </div>
            </div>
        )
    }
}

export default MessagePanel
