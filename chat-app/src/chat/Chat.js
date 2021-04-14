import React from "react"
import {ChannelList} from "./ChannelList"
import './chat.scss'
import MessagePanel from "./MessagePanel"

export class Chat extends React.Component{

    state = {
        channels: [],
        currentChat:{
            person:{
                username:"Wait"
            }
        },
        username:"",
        messageList:[]
    }

    componentDidMount = ()=>{
        console.log("Hello");
        fetch('/getChannels?username='+this.props.username+'&&category='+this.props.category).
        then(res=>res.json())
        .then((result)=>{
            console.log("heyyyy",result);
            this.setState({channels:result.info});
            this.setState({currentChat:result.info[0]})
            this.setState({username:this.props.username});
            // this.setState({messageList:result.info[0].messageList})
            this.getMessages(this.state.currentChat);
        })
    }

    changeCurrentChat = (newChat)=>{
        console.log("Changing:",newChat)
        this.setState({currentChat:newChat})
        this.getMessages(newChat);
    }

    getMessages = (chat)=>{
        fetch('/getMessages?id='+chat.chat).
        then(res=>res.json())
        .then((result)=>{
            console.log("heyyyy",result);
            this.setState({messageList:result.messageList});
        })
    }

    updateMessage = (data)=>{
        this.setState(state => {
            const messageList = state.messageList.concat(data);
       
            return {
              channels:state.channels,
              currentChat:state.currentChat,
              messageList,
              username: state.username,
            };
          });
    }

    testing = ()=>{
        console.log("The states are: ",this.state);
    }

    render(){
        return (
            <div className = "chat-app">
                {/* <button onClick = {this.testing}>Test</button> */}
                <ChannelList channels ={this.state.channels} changeCurrentChat = {this.changeCurrentChat} />
                <MessagePanel currentChat = {this.state.currentChat} updateMessage = {this.updateMessage} messageList = {this.state.messageList} username = {this.props.username} socket = {this.props.socket} category = {this.props.category}/>
            </div>
        )
    }
}

export default Chat