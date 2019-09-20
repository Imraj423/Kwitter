import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardBody } from "shards-react";
// import { EditAccountModal } from ".";
import defaultAvatar from "./Logo1.png";

export default function UserBanner({ user }) {
  const [shouldShow, setShouldShow] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const loggedInUser = useSelector(state => state.auth.login.username);
  const users = useSelector(state => state.users.userList);

  useEffect(() => {
    let userIndex = users.map(user => user.username).indexOf(loggedInUser);
    setProfilePic(
      userIndex >= 0 ? users[userIndex].pictureLocation : defaultAvatar
    );
    // eslint-disable-next-line
  }, [users]);
  return (
    <div style={styles.container}>
      {/* <EditAccountModal
        show={shouldShow}
        user={user}
        toggle={() => {
          setShouldShow(false);
        }}
      /> */}
      {user && (
        <Card>
          <CardBody>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end"
              }}
            >
              <img style={styles.profileCircle} src={profilePic} alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={styles.displayname}>{user.displayName}</p>
                <p style={styles.username}>{user.username}</p>
              </div>
              {loggedInUser === user.username && (
                <Button pill outline onClick={() => setShouldShow(true)}>
                  Edit Profile
                </Button>
              )}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "35px"
  },

  profileCircle: {
    borderRadius: "50%",
    height: "134px",
    width: "134px",
    margin: ""
  },

  displayname: {
    fontSize: "20px",
    fontWeight: "bold"
  },

  username: {
    marginTop: -25,
    marginBottom: -25
  }
};
