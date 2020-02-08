import React from 'react';
import { TitleBar } from './titleBar';
import Data from './dbUser';
import { Form } from './userForm';

export class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            value: {
                name: '',
                phone: '',
                key: '',
                cancellations: '',
                email: '',
                hasPicture: '',
                lastTrip: '',
                permitted: '',
                shopAddress: '',
                shopkeeper: '',
                found     : false
            }
        }

    }

    componentDidMount() {
        Data.userData(this.props.match.params.id).on('value', snapshot => {
            this.setState({
                key: snapshot.key,
                value: {
                    name: snapshot.val().name,
                    phone: snapshot.val().phone,
                    id: snapshot.val().id,
                    cancellations: snapshot.val().cancellations,
                    email: snapshot.val().email,
                    hasPicture: snapshot.val().hasPicture,
                    lastTrip: snapshot.val().lastTrip,
                    permitted: snapshot.val().permitted,
                    shopAddress: snapshot.val().shopAddress,
                    shopkeeper: snapshot.val().shopkeeper,
                    found : true
                }
            })
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleChange = (obj) => {
        this.setState({
            value: obj
        })
    }

    render() {
        return (
            <div>
                <TitleBar />
                {/* Form */}
                <Form
                    value={this.state.value}
                    onChange={this.handleChange} />
            </div>
        )
    }
}