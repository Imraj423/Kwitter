// import React from 'react'
// import {getMessage} from './actions/messages'
// import {useSelector, useDispatch} from 'react-redux'
// import defaultAvatar from './Logo1.png'


// export default function MessageList() {
//     const kweets = useSelector(state => state.messages.userMessages);
//     const users = useSelector(state => state.users);
//     const dispatch = useDispatch();
// ​    
//     useEffect(() => {
//         dispatch(getMessage(10, 0));
//         // eslint-disable-next-line
//     }, [])
// ​
//     return (
//         <div>
//             {kweets.length && kweets.map((kweet, index) => 
//                 <Card style={{marginTop: '10px', marginBottom: '10px'}}>
//                     <CardBody>
//                         <div style={styles.kweet}>
//                             <img 
//                                 style={styles.profileCircle} 
//                                 src={defaultAvatar(kweet.username)} 
//                                 alt="profile" 
//                             />
//                             <div>
//                                 <div style={styles.kweetUserName}>
//                                     {kweet.username}
//                                 </div>
//                                 <div style={styles.kweetInfo}>
//                                     {kweet.text}
//                                 </div>
//                             </div>
//                         </div>
//                     </CardBody>
//                     <CardFooter>
//                         <div style={{display: 'flex', justifyContent: 'flex-end'}}>
//                             <FontAwesomeIcon 
//                                 onClick={handleLike} 
//                                 style={{cursor: 'pointer'}} 
//                                 icon={faHeart}/>
//                         </div>
//                     </CardFooter>
//                 </Card>
//             )}
//         </div>
//     )
// }
// const styles = {
//     profileCircle: {
//         borderRadius: '50%',
//         height: '53px',
//         width: '53px',
//         margin: '0 15px'
//     },
// ​
//     kweet: {
//         display: 'flex',
//     },
// ​
//     kweetUserName: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         fontFamily: 'Helvetic Neue',
//     },
// ​
//     kweetInfo: {
//         fontFamily: 'Helvetic Neue'
//     }
// }

import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "./actions/messages";
​
class MessageBoard extends Component {
  componentDidMount() {
    this.props.getMessages();
    //this.props.likeMessage();
  }
​render() {
    console.log(this.props.messages);
    return (
      <>
        <section>
          <div>
            <div className="section">
              <div className="container">
                <h1 className="title is-1 has-text-centered">
                  {" "}
                  Message Board{" "}
                </h1>
              </div>
            </div>
            {this.props.messages.map(message => {
              return (
                <React.Fragment key={message.id}>
                  <div className="section">
                    <div className="container">
                      <div className="message is-primary">
                        <div
                          id="message"
                          className="message-header is-clearfix"
                        >
                          {" "}
                          <img
                            src="https://imgix.ranker.com/user_node_img/50088/1001747365/original/protect-from-daddy-and-_39_s-scary-face-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
                            alt="Bulma as default"
                          />
                          <h1 id="messageUsernames">{message.username} </h1>
                        </div>
​
                        <div id="message" className="message-body">
                          {message.text}
                        </div>
                        <button className="button">
                          {console.log(message.id)}
                          <div id="like">
                            Like
                            {message.likes.map(like => {
                              //   {
                              //     onclick = this.props.likeMessage(message.id);
                              //   }
                              return <p key={like.id}>Liked by: {like.id}</p>;
                            })}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <br />
                </React.Fragment>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}
​
const mapStateToProps = state => {
  console.log(state);
  return {
    messages: state.messages.getMessages
  };
};
​
const mapDispatchToProps = {
  getMessages
  //likeMessage
};
​
export default connect(
  mapStateToProps,
  //{ getMessages }
  mapDispatchToProps
)(MessageBoard);