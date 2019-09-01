import React, { useEffect } from 'react'
import { getUserMessages } from '../actions/messages'
import { useSelector, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container';
import Like from '@material-ui/icons/ThumbUp.js'




export default function MessageList() {
    const kweets = useSelector(state => state.messages.userMessages);
    const addLike = useSelector(state => state.likes.ADD_LIKES)
    const unLike = useSelector(state => state.likes.REMOVE_LIKES)
    const dispatch = useDispatch();
    
    

  //  const getLike = e => {

    //}

    useEffect(() => {
        dispatch(getUserMessages(100, 0));
        // eslint-disable-next-line
    }, [])

    return (
       <>
            {kweets.length && kweets.map((kweet, index) =>
                <Container style={{ marginTop: '10px', marginBottom: '10px' }}>
                    
                        <div style={styles.kweet}>
                            <img
                                style={styles.profileCircle}
                                src={(kweet.username)}
                                alt="profile"
                            />
                            <div>
                                <div style={styles.kweetUserName}>
                                    {kweet.username}
                                </div>
                                <div style={styles.kweetInfo}>
                                    {kweet.text}
                                    <Like onclick={addLike} onDoubleClick={unLike}>Like</Like>
                                </div>
                            </div>
                        </div>
                </Container>
            )}
        
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
