import React from "react"
import {Channel} from "./Channel"

export class ChannelList extends React.Component{
    render(){
        let list = "There are no channels to show"

        if (this.props.channels){
            list = this.props.channels.map(
                c => 
                (<Channel key={c.id} id={c.id} name={c.name} participants={c.participants}/>))
        }

        return (
        <div>
            {list}
        </div>)
    }
}

export default ChannelList