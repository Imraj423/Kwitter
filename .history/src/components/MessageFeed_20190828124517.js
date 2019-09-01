import React from 'react'
import {Header, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import MessageList from './GetMessages'
import { getUserMessages } from '../actions';

const CommentExampleComment = () => (
  <Container>
    <Header as="h3" dividing>
      Comments
    </Header>
    <getUserMessages />
  </Container>
);

export default CommentExampleComment
