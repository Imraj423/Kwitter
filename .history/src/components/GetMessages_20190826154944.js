import React, { useEffect } from 'react'
import { getMessages } from '../actions/messages'
import { useSelector, useDispatch } from 'react-redux'
import defaultAvatar from '../Logo1.png'
import Container from '@material-ui/core/Container';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart } from '@fortawesome/free-solid-svg-icons'




export default function MessageList() {
    const kweets = useSelector(state => state.messages.messages);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    

  //  const getLike = e => {

    //}

    useEffect(() => {
        dispatch(getMessages(10, 0));
        // eslint-disable-next-line
    }, [])

    return (
       <>
            {kweets.length && kweets.map((kweet, index) =>
                <Container style={{ marginTop: '10px', marginBottom: '10px' }}>
                    
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
                    
                    <footer>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                           
                        </div>
                    </footer>
                
            )}
        </Container>
       </>
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
