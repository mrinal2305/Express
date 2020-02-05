import React from 'react';
import Data from './dbDriver';
import { TitleBar } from './titleBar';
import { Link } from 'react-router-dom';

function Goto(props){
  if(props.found){
      return(
          <div>
                <Link to={`/home/driver/verify/${props.id}`}>Verify</Link>
                <Link to={`/home/driver/recharge/${props.id}`}>Recharge</Link>
          </div>
      )
  }
  else {
      return(
          <div></div>
      )
  }
}

export class Driver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '+91',
            spinner: false,
            value: '',
            found : false
        }
    }

    changeHandler = (event) => {
        this.setState({
            val: event.target.value
        })
    }

    handleClick = () => {
      
        this.setState({
            spinner: true
        })
        Data.userMatch(this.state.val).on('child_added', snaphot => {
            this.setState({
                val: '+91',
                value: snaphot.val(),
                spinner: false,
                found : true
            })
        })
    }

    render() {
        return (
            <div>
                <TitleBar />
                <h4>Driver Layout</h4>
                <input type="text" name="Search" placeholder="Search" onChange={this.changeHandler} value={this.state.val} />
                <button onClick={this.handleClick}>Search</button>
                <h1>{this.state.spinner}</h1>
                <h1>{this.state.value.name}</h1>
                <Goto found={this.state.found} id={this.state.value.id}/>
            </div>
        )
    }
}