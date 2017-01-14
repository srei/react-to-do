import React from 'react';
import RemoveToDo from './RemoveToDo.jsx';

// local state is only available to classes
const TodoList = ({todos, addItem}) => {
	return (
		<div className="todoListMain">
			<form onSubmit={addItem}>
				<input placeholder="Enter Your Task">
				</input>
				<button type="submit">Add Task </button>
				<RemoveToDo/>
			</form>
		</div>
	);
};

export default TodoList;