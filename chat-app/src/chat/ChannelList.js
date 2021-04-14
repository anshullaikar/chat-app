import React from "react"
import {Channel} from "./Channel"

export class ChannelList extends React.Component{

    checkChannel2 = (msgID,e)=>{
        console.log("Yes changing channel:",msgID);
        this.props.channels.map(c=>{
            if(c.person._id === msgID){
                this.props.changeCurrentChat(c);
            }
        })
    }

    render(){
        let list = "There are no channels to show"

        if (this.props.channels){
            list = this.props.channels.map(
                c => 
                (<Channel key={c.person._id} id={c.person._id} name={c.person.username} participants={2} onClick = {this.checkChannel2.bind(this,c.person._id)}/>))
        }

        return (
        <div className = "channel-list" >
            {list}
        </div>)
    }
}

export default ChannelList