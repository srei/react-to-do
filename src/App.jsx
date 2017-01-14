import React, {Component} from 'react';
import TodoList from './components/TodoList.jsx';

class App extends Component {
	 constructor(props){
		super(props);
		this.state = {
			items: []
		};
		this.addItem = this.addItem.bind(this);
	}
	 addItem(e){
		console.log(JSON.stringify(e), "I am inside of addItem");
	}
  render() {
    return (
      <TodoList todos={this.state.items} addItem={this.addItem}/>
    );
  }
}
export default App;
