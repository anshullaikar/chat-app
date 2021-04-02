import React from "react"
import {Channel} from "./Channel"

export class ChannelList extends React.Component{

    checkChannel2 = (msgID,e)=>{
        console.log("Yes changing channel:",msgID);
        this.props.channels.map(c=>{
            if(c._id === msgID){
                this.props.changeCurrentChat(c);
            }
        })
    }

    render(){
        let list = "There are no channels to show"

        if (this.props.channels){
            list = this.props.channels.map(
                c => 
                (<Channel key={c._id} id={c._id} name={c.name} participants={c.participants} onClick = {this.checkChannel2.bind(this,c._id)}/>))
        }

        return (
        <div className = "channel-list" >
            {list}
        </div>)
    }
}

export default ChannelList