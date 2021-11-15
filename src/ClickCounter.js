import React, { Component, setState } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const {count,  incrementCount} = this.props   //destructuring
        return (
            <div>
                <button onClick={incrementCount}> {this.props.name}  Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent (ClickCounter)
