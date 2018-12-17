import React, { Component } from 'react';


class TodoForm extends Component {
    constructor (props){
        super(props)

        this.state = {titleText: ''};
        this.addTODO = props.addTODO;
        this.resetTodos = props.resetTodos
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this)
        this.inputTextChange = this.inputTextChange.bind(this)
    }
    submit(){
        this.addTODO(this.state.titleText)
        this.setState({titleText: ""})
    }
    reset(){
        this.resetTodos()
    }
    inputTextChange(event){
        this.setState({titleText: event.target.value})
    }
    render(){
        return (
            <>
                <h2>TODO FORM :</h2>
                <label>title :</label>
                <input type='text' value={this.state.titleText} onChange={this.inputTextChange}/>
                <input type='submit' value='Ajouter' onClick={this.submit}/>
                <input type='submit' value='reset' onClick={this.reset}/>
            </>
        );
    }
}

export default TodoForm;
