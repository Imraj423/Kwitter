import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MessageList from "./GetMessages"
import {getMessages} from '../actions'
import { connect } from 'react-redux'

class MessageFeed extends Component {
    state ={
        text:""
    };
    componentDidMount() {
        this.props.getMessages();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    };
    render() {
        return (
            <>
            <textarea name="text" onChange={this.handleChange}></textarea>
            <button onClick={event => this.props.createMessage(this.state)}>
                Kweet
            </button>
            <MessageList messages={this.props.messages}/>
            </>
        )
    }

export default connect(
  state => {
    return {
      messages: state.messages.getMessages,
      
    };
  },
  { getMessages, createMessage }
)(MessageFeed);







}