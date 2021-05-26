import React, {useState} from 'react';
import ReactDOM          from 'react-dom';
import './index.css';
import AddTask           from './App';

const ToDoList = () => {
	const addTask            = text => updateTask([...task, {text}]);
	const [task, updateTask] = useState([
		                                    {
			                                    text       : 'wake Up',
			                                    inCompleted: false
		                                    },
		                                    {
			                                    text       : 'Fresh Up',
			                                    inCompleted: false
		                                    },
		                                    {
			                                    text       : 'boost Up',
			                                    inCompleted: false
		                                    }
	                                    ]);

	const toggleTask = index => {
		const newTask = [...task];
		if(newTask[index].inCompleted){
			newTask[index].inCompleted = false;
		} else{
			newTask[index].inCompleted = true;
		}
		updateTask(newTask);
	};
	const removeTask = index => {
		const newTask = [...task];
		newTask.splice(index, 1);
		updateTask(newTask);
	};

	return (
		<div className="todo-box">
			<h1>Todo List</h1>
			<AddTask addTask={addTask}/>
			<div className="list-of-task">
				{task.map((e, index) => (
					<div className="task-status">
						<span>{index}</span>
						<span onClick={() => toggleTask(index)} className={e.inCompleted ? 'task-name complected' : 'task-name'}>
							 {e.text}
						</span>

						<button onClick={() => removeTask(index)}>
							<span><i className='bx bxs-trash-alt'></i></span>
						</button>
					</div>

				))}
			</div>
		</div>
	);
};
ReactDOM.render(<ToDoList/>, document.getElementById('root'));
