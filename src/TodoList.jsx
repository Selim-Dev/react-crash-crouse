import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<ul className='list'>
			{todos.length === 0 && "No Todos Found"}
			{todos.map((todo) => <TodoItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} {...todo} key={todo.id} />)}

		</ul>
	)
}

export default TodoList