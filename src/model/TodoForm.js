import React, { Component } from 'react';
import {addTodo, resetTodo} from '../Redux/store/todo.action';
import {connect} from 'react-redux';

class TodoForm extends Component {
    constructor (props){
        super(props)

        this.state = {titleText: ''};
        this.inputTextChange = this.inputTextChange.bind(this)
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
                <input type='submit' value='Ajouter' onClick={() => {
                    this.props.addTodo(this.state.titleText);
                    this.setState({titleText: ''});
                }}/>
                <input type='submit' value='reset' onClick={this.props.resetTodo}/>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.list,
});

const mapDispatchToProps = dispatch => ({
    addTodo: title => dispatch(addTodo(title)),
    resetTodo: () => dispatch(resetTodo())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm)
