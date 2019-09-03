import React, { Component } from "react";
import { deleteMessage } from "../actions";
import { connect } from "react-redux";

class DeleteMsg extends Component {
  render() {
    return this.props.messages.map(message => {
      const isDeletable = message.username === this.props.username;
      return (
        <React.Fragment key={message.id}>
          <p>{message.username}</p>
          <p>{new Date(message.createdAt).toDateString()}</p>
          <p>{message.text}</p>
          <p>Number of likes: {message.likes.length}</p>
          {isDeletable && (
            <button onClick={e => this.props.deleteMessage(message.id)}>
              Delete
            </button>
          )}
        </React.Fragment>
      );
    });
  }
}

export default connect(
  state => {
    return {
      username: state.auth.login.username
    };
  },
  { deleteMessage }
)(DeleteMsg);
