import React, { Component } from 'react'


export default class Messages extends Component {
    render() {
        return (
            <div>
                <b>{this.props.message}</b>
            </div>
        )
    }
}
