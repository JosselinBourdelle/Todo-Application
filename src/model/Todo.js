import React, { Component } from 'react';

class Todo extends Component {
    constructor (props){
        super(props)

        this.state = {title: props.title, isDone: props.isDone}
        this.isDone = props.isDone
        this.setDone = this.setDone.bind(this)
        this.titleElement = <h3>{this.state.title.toUpperCase()}</h3>
    }
    componentDidUpdate(){
        
    }
    setDone(){
        this.isDone = !this.isDone
        if(this.isDone){
            this.titleElement = <h3><s>{this.state.title.toUpperCase()}</s></h3>
        }
        else {
            this.titleElement = <h3>{this.state.title.toUpperCase()}</h3>
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