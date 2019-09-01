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


export default function MessageList() {
  const kweets = useSelector(state => state.messages.getMessages);
  const currentUsername = useSelector(state => state.auth.login.username)

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const createLike = messageId => {
    dispatch(addLike(messageId)).then(() => dispatch(getMessages()));
  };

  const createUnLike = kweet => {
    let likeId

     // forEach method
    // kweet.likes.forEach((currentLike)=>{
    //   if(currentLike.username === currentUsername){
    //     likeId = currentLike.id
    //   }
    // })

    // regular for loop method
    for(let i = 0; i < kweet.likes.length; i++){
      let currentLike = kweet.likes[i]
      if(currentLike.username === currentUsername){
        likeId = currentLike.id
      }
    }
dispatch(unLike(likeId)).then(()=>dispatch(getMessages()))

  };

  const createMsg = () => {
    // Take input and make post request
    dispatch(createMessage(input));
    dispatch(getMessages());
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
          border: "1px black solid",
          width: "500px",
          marginTop: "30px",
          marginBottom: "1px",
          display: "flex",
          WebkitJustifyContent: "flexStart"
        }}
      >
        <Input onChange={handleInput}></Input>
        <Button onClick={createMsg}></Button>
      </div>
      {kweets.length > 0 &&
        kweets.map((kweet, index) => (
          <Container
            style={{
              border: "1px black solid",
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
                    <Like onClick={() => createLike(kweet.id)}>Like</Like>
                  </Button>
                  <Button>
                    <Dislike onClick={() => createUnLike(kweet)}>
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
