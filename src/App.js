import React, {useState} from 'react';
import './App.css';

const AddTask = ({addTask}) => {
	const [value, updateValue] = useState('');
	const handleSubmit         = e => {
		e.preventDefault();
		if(value !== ''){
			addTask(value);
			updateValue('');
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text"
			       value={value}
			       placeholder="enter your Task todo"
			       onChange={e => updateValue(e.target.value)}/>
			<button type="submit">
				<span><i className='bx bx-plus'></i></span>
			</button>
		</form>
	);
};

export default AddTask;
