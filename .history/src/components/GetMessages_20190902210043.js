import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Dislike from "@material-ui/icons/ThumbDown.js";
import Like from "@material-ui/icons/ThumbUp.js";
import { Input } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import { createMessage, getMessages } from "../actions/messages";
import { addLike, unLike } from "../actions/likes";
import Background from "./Logo1.png";
import { composeMessage } from "../actions/messages";

function app (){
  const[text, setText] = useState("")
}

  
  const handleMessageSubmit = e => {
    setText(e.target.value)
  };
  const handleComposeMessageProfileEnter = e => {
    if (event.key === "Enter") {
      composeMessage(setText);
      setText("");
    }
  };

  // handleComposeMessageProfileButton = event => {
  //   this.props.composeMessage(this.state.text);
  //   this.setState({ text: "" });
  // };

 // displayFeed = () => {
    return (
      <Form
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TextArea
          placeholder="What would you like to Kweet about today?"
          onChange={this.handleMessageSubmit}
          value={this.state.text}
          // onKeyPress={this.handleComposeMessageProfileEnter}
          maxLength="255"
          style={{ maxWidth: "36em" }}
        />
        <Button
          style={{
            color: "rgb(45,45,45)",
            padding: "5px"
          }}
          onClick={this.handleComposeMessageProfileButton}
        >
          Kweet
        </Button>
      </Form>
    );
  };

  render() {
    return <Fragment>{this.displayFeed()}</Fragment>;
  }
}

function mapStateToProps(state) {
  return {
    userID: state.userID
  };
}

const mapDispatchToProps = dispatch => {
  return {
    composeMessage: text => {
      dispatch(composeMessage(text));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComposeMessage);









export function MessageList() {
  const kweets = useSelector(state => state.messages.getMessages);
  const currentUsername = useSelector(state => state.auth.login.username)

  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
 

  const createLike = messageId => {
    dispatch(addLike(messageId)).then(() => dispatch(getMessages()));
  };

  const createUnLike = kweet => {
    let likeId
    for(let i = 0; i < kweet.likes.length; i++){
      let currentLike = kweet.likes[i]
      if(currentLike.username === currentUsername){
        likeId = currentLike.id
      }
    }
dispatch(unLike(likeId)).then(()=>dispatch(getMessages()))

  };
  const handleMessageSubmit = e => {
    setText(e.target.value)
  };
  const handleComposeMessageProfileEnter = e => {
    if (event.key === "Enter") {
      composeMessage(setText);
      setText("");
    }
  };


  const createMsg = () => {
    // Take input and make post request
    dispatch(createMessage(input));
    dispatch(getMessages(""));
  };
  const handleInput = e => {
    //take in the event
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(getMessages(100, 0));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        style={{
          width: "500px",
          marginTop: "30px",
          marginBottom: "1px",
          display: "flex",
          WebkitJustifyContent: "flexStart",
          position: "relative",
          left: "358px"
        }}
      >
        <Input
          onChange={handleMessageSubmit}
          value={setText}
          style={{ border: "1px gray solid", width: "358px" }}
        >
          Enter Comment...
        </Input>
        <Button onClick={handleComposeMessageProfileEnter}>Kweet!</Button>
      </div>
      {kweets.length > 0 &&
        kweets.map((kweet, index) => (
          <Container
            style={{
              width: "500px",
              marginTop: "30px",
              marginBottom: "1px",
              display: "flex",
              WebkitJustifyContent: "flexStart"
            }}
          >
            <div style={styles.kweet}>
              <img
                style={styles.profileCircle}
                src={Background}
                alt="profile"
              />
              <div>
                <div style={styles.kweetUserName}>{kweet.username}</div>
                <div style={styles.kweetInfo}>
                  {kweet.text}

                  <p># of Likes: {kweet.likes.length}</p>
                  <Button>
                    <Like
                      onClick={() => createLike(kweet.id)}
                      style={{ height: "20px", width: "20px" }}
                    >
                      Like
                    </Like>
                  </Button>
                  <Button>
                    <Dislike
                      onClick={() => createUnLike(kweet)}
                      style={{ height: "20px", width: "20px" }}
                    >
                      UnLike
                    </Dislike>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        ))}
    </>
  );
}
const styles = {
  profileCircle: {
    borderRadius: "50%",
    height: "53px",
    width: "53px",
    margin: "0 15px"
  },

  kweet: {
    display: "flex"
  },

  kweetUserName: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Helvetic Neue"
  },

  kweetInfo: {
    fontFamily: "Helvetic Neue"
  }
};
