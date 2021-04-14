import React, { Component } from 'react'
import socketClient from "socket.io-client"
import Chat from "./chat/Chat"
const SERVER = "http://localhost:8080"


class App extends Component {

  state = {
    showChat:false,
    username:"",
    socket:null,
    category:""
  }

  componentDidMount = ()=>{
    let socket = socketClient(SERVER)
    socket.on("connection", (data)=> {
      console.log("I'm connected with the back-end")
      this.setState({socket:socket});
      
    })
    
  }
  
  startChatting = ()=>{
    console.log("yess getting username");
    const parts = this.state.username.split("-");
    console.log(parts);
    this.setState({username:parts[0],category:parts[1],showChat:true})
  }

  getUserName = (e)=>{
    this.setState({username:e.target.value})
    console.log("Username:",e.target.value);
  }

render(){

  return (
    <div className="App">
      {(this.state.showChat)?(<Chat username = {this.state.username} socket={this.state.socket} category = {this.state.category}/>):
      (<div>
        <h1>Enter UserID:</h1>
        <input type="text" name="userID" onChange={this.getUserName} />
  <button onClick={this.startChatting}>Start</button>
        <br/>
        <strong>Note:</strong>Here only enter 1, 2 ,3 (these are the temporary usernames present in server side for testing)
      </div>)}
      
    </div>
  );

}
  
}

export default App;
