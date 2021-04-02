import React, { Component } from 'react'

export class Channel extends Component {

    render() {
        return (
            <div className = "channel-item"  key = {this.props.key} id={this.props.id} onClick = { this.props.onClick}>
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
            </div>
        )
    }
}

export default Channel

