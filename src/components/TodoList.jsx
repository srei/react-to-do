import React from 'react';

const TodoList = () => {
	return (
		<div className="todoListMain">
			<div className="header">
			<form>
				<input placeholder="enter your task">
				</input>
				<button type="submit">Add Task </button>
			</form>
			</div>
		</div>
	);
};

export default TodoList;