import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  FormInput
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { getAllUsers } from "../actions";

export default function FriendsList() {
  const users = useSelector(state => state.users.userList);

  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredusers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  });

  useEffect(() => {
    setFilteredusers(users);
  }, [users]);

  useEffect(() => {
    setFilteredusers(
      users.filter(
        user =>
          user.username.toLowerCase().includes(searchValue) ||
          user.displayName.toLowerCase().includes(searchValue)
      )
    );
  }, [users, searchValue]);

  return (
    <div style={styles.cardContainer}>
      <Card>
        <CardBody>
          <div style={{ marginBottom: "10px" }}>
            <label>Search Users</label>
            <FormInput
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              style={{
                width: "40vw"
              }}
            />
          </div>
          <div style={styles.usersList}>
            <ListGroup>
              {filteredUsers.map((user, index) => (
                <UserListCard user={user} key={index} />
              ))}
            </ListGroup>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

const UserListCard = props => {
  let { pictureLocation, username, displayName } = props.user;

  return (
    <ListGroupItem>
      <NavLink style={{ outline: "none" }} to={`/profile/${username}`}>
        <div style={{ display: "flex" }}>
          <div>
            <img style={styles.profileCircle} src={pictureLocation} alt="" />
          </div>
          <div style={{ overflow: "hidden" }}>
            <ListGroupItemHeading>{displayName}</ListGroupItemHeading>
            <ListGroupItemText>{username}</ListGroupItemText>
          </div>
        </div>
      </NavLink>
    </ListGroupItem>
  );
};

const styles = {
  profileCircle: {
    borderRadius: "50%",
    height: "53px",
    width: "53px",
    margin: "0 15px"
  },

  usersList: {
    width: "60vw",
    height: "60vh",
    overflowY: "scroll"
  },

  cardContainer: {
    // marginLeft: "50px",
    width: "70vw",
    marginTop: "20px"
  }
};
