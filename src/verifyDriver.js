import React from 'react';

import Data from './dbDriver';
import { VerifyForm } from './driverVerifyForm';
import { TitleBar } from './titleBar';

export class VerifyDriver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: {
            },
            profilePhoto: '',
            profileFound: '',
            driverAadharBack : '',
            driverAadharFront : '',
            ownerAadharBack : '',
            ownerAadharFront : '',
            insurance : '',
            found : ''
        }
    }

    handleChange = (obj) => {
        this.setState({
            val: obj,
        })
    }

    componentDidMount() {

        Data.userData(this.props.match.params.id).on('value', snapshot => {
            var key = snapshot.key + '.jpg';
            Data.userProfilePhoto(key).then(url => {

                this.setState({
                    profilePhoto: url,
                    profileFound: "Found"
                })
            }).catch(err => {

                this.setState({
                    profilePhoto: '',
                    profileFound: err.message
                })
            })


            Data.userDocument(snapshot.key).then(data => {

                data.items[0].getDownloadURL().then(url => {
                    this.setState({
                        driverAadharBack: url
                    })
                });
                data.items[1].getDownloadURL().then(url => {
                    this.setState({
                        driverAadharFront: url
                    })
                });
                data.items[2].getDownloadURL().then(url => {
                    this.setState({
                        ownerAadharBack: url
                    })
                });
                data.items[3].getDownloadURL().then(url => {
                    this.setState({
                        ownerAadharFront: url
                    })
                });
                data.items[4].getDownloadURL().then(url => {
                    this.setState({
                        insurance: url
                    })
                });           //show the data
                this.setState({
                    val: snapshot.val(),
                    found: true
                })
            })
                .catch(err => {
                    this.setState({
                        val: snapshot.val(),
                        found: false
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
                    profilePhoto={this.state.profilePhoto} profileFound={this.state.profileFound} />
            </div>
        )
    }
}