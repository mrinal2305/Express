import React from 'react';

import Data from './dbDriver';
import { VerifyForm } from './driverVerifyForm';
import { TitleBar } from './titleBar';

export class VerifyDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val : {
                
            },
            status : '',
            image  : '',
            profilePhoto : '',
            profileFound : ''
        }
    }

    handleChange = (obj,status,image) => {
        this.setState({
            val : obj,
        })
    }

    componentDidMount(){
     
       Data.userData(this.props.match.params.id).on('value',snapshot => {
        Data.userProfilePhoto(snapshot.key).then(url =>{
            console.log(url);
            this.setState({
                profilePhoto : url,
                profileFound : "Found"
            })
        }).catch(err => {
           
            this.setState({
                profilePhoto : '',
                profileFound : err.message
            })
        })

       var image = [];
       Data.userDocument(snapshot.key).then(data => {
            data.items.forEach(child => {
             child.getDownloadURL().then(url => { //getting url of all images
                 var obj = {
                     name : child.name,
                     url  : url
                 }
                 image.push(obj);
             });  
            })
         
            this.setState({
                val : snapshot.val(),
                status : "Image Found",
                image :  image
            })

            }).catch(err => {
                this.setState({
                    val    : snapshot.val(),
                    status : err,
                    image : ''
                })    
            })
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div>
                <TitleBar />
                {/* Form */}
                <VerifyForm value={this.state} status={this.state.status} image={this.state.image} onClick={this.handleChange}
                profilePhoto={this.state.profilePhoto} profileFound={this.state.profileFound}/>
            </div>
        )
    }
}