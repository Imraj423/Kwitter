import React, { Component } from 'react'

class EditProfile extends Component {
    fileSelectedHandler = event => {
        console.log(event)
    }

    render() {
        return(
            <div className="pic">
                <input type="file" onChange={this.fileSelectedHandler}/>
            </div>
        )
    }
}
export default EditProfile;