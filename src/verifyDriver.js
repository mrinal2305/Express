import React from 'react';
import Data from './dbDriver';
import { TitleBar } from './titleBar';
import { VerifyForm } from './driverVerifyForm';

export class VerifyDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val : '',
            status : '',
            image  : ''
        }
    }

    handleChange = (obj,status,image) => {
        this.setState({
            val : obj,
            status :status,
            image :image
        })
        
    }

    componentDidMount(){
     
       Data.userData(this.props.match.params.id).on('value',snapshot => {
       var image = [];
       Data.userDocument(snapshot.key).then(data => {
            data.items.forEach(child => {
             child.getDownloadURL().then(url => { //getting url of all images
                 var obj = {
                     name : child.name,
                     url  : child.url
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
                <VerifyForm value={this.state.val} status={this.state.status} image={this.state.image} onClick={this.handleChange}/>
            </div>
        )
    }
}