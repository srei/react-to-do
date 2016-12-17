import React from 'react';
import RemoveToDo from './RemoveToDo.jsx';


//stateless functional component -> it recieves props as its first argument.
const TodoList = ({todos}) => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		listofitems = []
	// 	};
	// }
	return (
		<div className="todoListMain">
			<div className="header">
			<form>
				<input placeholder="Enter Your Task">
				</input>
				<button type="submit">Add Task </button>
				<RemoveToDo/>
			</form>
			</div>
		</div>
	);
};

export default TodoList;