import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Dislike from "@material-ui/icons/ThumbDown.js";
import Like from "@material-ui/icons/ThumbUp.js";
import { Input, Button } from "@material-ui/core";

import { getMessages, createMessage, deleteMessage } from "../actions/messages";
import { addLike, unLike } from "../actions/likes";
import Background from "./Logo1.png";
import { getUser } from "../actions";
// import {domain} from "../actions/constants"

export function MessageList() {
  const kweets = useSelector(state => state.messages.getMessages);
  const currentUsername = useSelector(state => state.auth.login.username);

  // const create = useSelector(state => state.messages.createMessage)
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const createLike = messageId => {
    dispatch(addLike(messageId)).then(() => dispatch(getMessages()));
  };

  const createUnLike = kweet => {
    let likeId;
    for (let i = 0; i < kweet.likes.length; i++) {
      let currentLike = kweet.likes[i];
      console.log("test");
      if (currentLike.username === currentUsername) {
        likeId = currentLike.id;
      }
    }
    dispatch(unLike(likeId)).then(() => dispatch(getMessages()));
  };

  const unMessage = kweet => {
    console.log("test");
    console.log(kweet);
    dispatch(deleteMessage(kweet)).then(() => dispatch(getMessages()));
  };

  const handleInput = e => {
    //take in the event
    setInput(e.target.value);
  };
  const createMsg = () => {
    // Take input and make post request
    dispatch(createMessage({ text: input }));
    dispatch(getMessages());
  };
  useEffect(() => {
    dispatch(getMessages(100, 0));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        style={{
          width: "50vw",
          marginTop: "30px",
          marginBottom: "1px",
          display: "flex",
          WebkitJustifyContent: "flexStart",
          position: "relative"
          // left: "358px"
        }}
      >
        <Input
          onChange={handleInput}
          style={{ border: "1px gray solid", width: "358px", padding: "3px" }}
          placeholder="Enter Kweet..."
        ></Input>
        <Button onClick={createMsg}>Kweet!</Button>
      </div>
      <div
        style={{
          height: "60vh",
          width: "30vw",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {kweets.length > 0 &&
          kweets.map((kweet, index) => (
            <Container
              style={{
                width: "25vw",
                marginTop: "30px",
                marginBottom: "1px",
                //display: "flex",
                WebkitJustifyContent: "flexStart"
              }}
              key={kweet.id}
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

                    <Button
                      onClick={() => unMessage(kweet.id)}
                      style={{ height: "20px", width: "50px" }}
                    >
                      Delete
                    </Button>

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
              <div>{getUser()}</div>
            </Container>
          ))}
      </div>
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
