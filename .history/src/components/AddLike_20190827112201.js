import React, { useEffect } from "react";
import { getMessages } from "../actions/messages";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";

export default function MessageList() {
  const kweets = useSelector(state => state.messages.messages);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  //  const getLike = e => {

  //}

  useEffect(() => {
    dispatch(getMessages(100, 0));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {kweets.length &&
        kweets.map((kweet, index) => (
          <Container style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div style={styles.kweet}>
              {/* <img
                                style={styles.profileCircle}
                                src={defaultAvatar(kweet.username)}
                                alt="profile"
                            /> */}
              <div>
                <div style={styles.kweetUserName}>{kweet.username}</div>
                <div style={styles.kweetInfo}>{kweet.text}</div>
              </div>
            </div>
          </Container>
        ))}
    </>
  );
}
