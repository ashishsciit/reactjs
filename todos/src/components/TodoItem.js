import React,{ Component } from "react";
import PropTypes from "prop-types";
// import "./App.css";

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '2px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }
    
    render(){
        const {id, title} = this.props.todo;
        return <div style={this.getStyle()}>
                    <p>
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                        {title}
                        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                    </p>
                </div>
    }
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 8px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;