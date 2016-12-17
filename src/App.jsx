import React, {Component} from 'react';
import TodoList from './components/TodoList.jsx';

//this is a stateless component
class App extends Component {
  render() {
    return (
      <TodoList/>
    );
  }
}
export default App;
