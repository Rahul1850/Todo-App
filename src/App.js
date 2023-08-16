import React ,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { useSelector } from 'react-redux';

const App = () => {
	const todoS=useSelector((state)=>state.todos)
	useEffect(() => {
		localStorage.setItem('todoS', JSON.stringify(todoS));
	  }, [todoS]);
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;