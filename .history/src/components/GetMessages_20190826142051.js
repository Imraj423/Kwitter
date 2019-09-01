import React from 'react'
import getMessage from './actions/messages'
import {useSelector, useDispatch} from 'react-redux'



export default function MessageList() {
    const kweets = useSelector(state => state.messages.messages);
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
​    const `getUserProfilePic` = user => {
        if(users[user])
            return users[user].pic;
​
        return defaultAvatar
    }
​
    const handleLike = e => {
​
    }
​
    useEffect(() => {
        dispatch(getMessage(10, 0));
        // eslint-disable-next-line
    }, [])
​
    return (
        <div>
            {kweets.length && kweets.map((kweet, index) => 
                <Card style={{marginTop: '10px', marginBottom: '10px'}}>
                    <CardBody>
                        <div style={styles.kweet}>
                            <img 
                                style={styles.profileCircle} 
                                src={getUserProfilePic(kweet.username)} 
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
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <FontAwesomeIcon 
                                onClick={handleLike} 
                                style={{cursor: 'pointer'}} 
                                icon={faHeart}/>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}