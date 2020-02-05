import React from 'react';
import { TitleBar } from './titleBar';
import Data from './dbDriver';
import {RechargeForm} from './rechareDriverForm';
import SimpleReactValidator from 'simple-react-validator';
    
export class RechargeDriver extends React.Component {
    constructor(props) {
       
        super(props);
        this.state = {
            val : ''
        }
    }

    validator = new SimpleReactValidator();

    componentDidMount(){
       Data.userData(this.props.match.params.id).on('value',snap => {
           this.setState({
               val : snap.val()
           })
       })
    }

    componentWillUnmount() {
         this._isMounted = false;
      }

      handleChange = (obj) => {
          this.setState({
              val : obj
          })
      }

    render() {
        return (
            <div>
                <TitleBar />
                {/* Form */}
                <RechargeForm value={this.state.val} onChange={this.handleChange} validator={this.validator}/>
            </div>
        )
    }
}