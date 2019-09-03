// import {Header, Container } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
// import MessageList from './GetMessages'
// import ErrorBoundary from '../ErrorBoundary/ErrBounds';

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { getMessages } from "../actions";


// export const CommentExampleComment = () => (
//   <Container>
//     <Header as="h3" dividing>
//       Comments
//     </Header>
//      <ErrorBoundary>
//         <MessageList />
//       </ErrorBoundary> 
//   </Container>
// );


// class MessageFeed extends Component {
//   componentDidMount() {
//       this.props.getMessages();
//   }

//   render() {
//       return (
//           <>
//           <Link to="/profile">
//               <button>MyProfile</button>
//           </Link>
//           <MessageList messages={this.props.messages} />
//           </>
//       );
//   }
// }

// export default connect(
//   state => {
//       return {
//           messages: state.messages.getMessages
//       };
//   },
//   { getMessages }
// )(MessageFeed);
