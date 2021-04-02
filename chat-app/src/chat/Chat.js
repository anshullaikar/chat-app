import React from "react"
import {ChannelList} from "./ChannelList"
import './chat.scss'
import MessagePanel from "./MessagePanel"

export class Chat extends React.Component{

    state = {
        channels: [],
        currentChat:{},
        username:"",
        messageList:[]
    }

    componentDidMount = ()=>{
        console.log("Hello");
        fetch('/getChannels?username='+this.props.username).
        then(res=>res.json())
        .then((result)=>{
            console.log("heyyyy",result);
            this.setState({channels:result.info});
            this.setState({currentChat:result.info[0]})
            this.setState({username:this.props.username});
            // this.setState({messageList:result.info[0].messageList})
            this.getMessages(this.state.currentChat._id);
        })
    }

    changeCurrentChat = (newChat)=>{
        console.log("Changing:",newChat)
        this.setState({currentChat:newChat})
        this.getMessages(newChat._id);
    }

    getMessages = (id)=>{
        fetch('/getMessages?id='+id).
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

    render(){
        return (
            <div className = "chat-app">
                <ChannelList channels ={this.state.channels} changeCurrentChat = {this.changeCurrentChat} />
                <MessagePanel currentChat = {this.state.currentChat} updateMessage = {this.updateMessage} messageList = {this.state.messageList} username = {this.props.username} socket = {this.props.socket}/>
            </div>
        )
    }
}

export default Chat