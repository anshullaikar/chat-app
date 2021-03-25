import React, { Component } from 'react'

export class Channel extends Component {
    render() {
        return (
            <div className = "channel-item">
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
            </div>
        )
    }
}

export default Channel

