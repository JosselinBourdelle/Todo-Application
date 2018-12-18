import React, { Component } from 'react';

class Todo extends Component {
    constructor (props){
        super(props)
        console.log(' constructor todo : ',props);
        
        this.state = {title: props.title, isDone: props.isDone}
        this.isDone = props.isDone
        this.setDone = this.setDone.bind(this)
        this.titleElement = <h3>{this.state.title}</h3>
    }
    setDone(){
        this.isDone = !this.isDone
        if(this.isDone){
            this.titleElement = <h3><s>{this.state.title}</s></h3>
        }
        else {
            this.titleElement = <h3>{this.state.title}</h3>
        }
        this.setState({isDone: this.isDone})
    }
    render(){
        return (
            <li>
                <input type="checkbox" checked={this.state.isDone} onChange={this.setDone} />
                {this.titleElement}
            </li>
        );
    }
}

export default Todo;