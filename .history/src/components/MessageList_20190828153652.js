import React, { Component } from "react";
import { deleteMessage } from "../actions";
import { connect } from "react-redux";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
} <ErrorBoundary>
class MessagesList extends Component {
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
            <button onClick={event => this.props.deleteMessage(message.id)}>
              Delete
            </button>
          )}
        </React.Fragment>
      );
    });
  }
}
</ErrorBoundary>
export default connect(
  state => {
    return {
      username: state.auth.login.username
    };
  },
  { deleteMessage }
)(MessagesList);
