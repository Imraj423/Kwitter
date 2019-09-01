import React from 'react'
import {Header, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import MessageList from './GetMessages'
import ErrorBoundary from '../ErrorBoundary/ErrBounds';

const CommentExampleComment = () => (
  <Container>
    <Header as="h3" dividing>
      Comments
    </Header>
     <ErrorBoundary>
        <MessageList />
      </ErrorBoundary> 
  </Container>
);

export default CommentExampleComment
