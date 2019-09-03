import React, { Component } from 'react'
import { uploadPicture } from '../actions';

class EditProfile extends Component {
    state = {
        selectedFile:null
    }
    fileSelectedHandler = event => {
        // console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler =() => {
        
    }
    render() {
        return(
            <div className="pic">
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={uploadPicture}>Upload</button>
            </div>
        )
    }
}
export default EditProfile;