import React, { useEffect } from 'react'
import { getMessage } from './actions/messages'
import { useSelector, useDispatch } from 'react-redux'
import defaultAvatar from '../Logo1.png'
import { Card, CardBody, CardFooter } from 'shards-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default function MessageList() {
    const kweets = useSelector(state => state.messages.userMessages);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const getUserProfilePic = user => {
        if (users[user])
            return users[user].pic;

        return defaultAvatar
    }

  //  const getLike = e => {

    //}

    useEffect(() => {
        dispatch(getMessage(10, 0));
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            {kweets.length && kweets.map((kweet, index) =>
                <Card style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <CardBody>
                        <div style={styles.kweet}>
                            <img
                                style={styles.profileCircle}
                                src={defaultAvatar(kweet.username)}
                                alt="profile"
                            />
                            <div>
                                <div style={styles.kweetUserName}>
                                    {kweet.username}
                                </div>
                                <div style={styles.kweetInfo}>
                                    {kweet.text}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <FontAwesomeIcon
                                //onClick={handleLike}
                                style={{ cursor: 'pointer' }}
                                icon={faHeart} />
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}
const styles = {
    profileCircle: {
        borderRadius: '50%',
        height: '53px',
        width: '53px',
        margin: '0 15px'
    },

    kweet: {
        display: 'flex',
    },

    kweetUserName: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Helvetic Neue',
    },

    kweetInfo: {
        fontFamily: 'Helvetic Neue'
    }
}
