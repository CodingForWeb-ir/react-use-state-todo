import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './todo-item'

export type Todo = {
	id: string
	text: string
	isCompleted: boolean
}

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: uuidv4(), text: 'Learn React', isCompleted: false },
		{ id: uuidv4(), text: 'Learn TypeScript', isCompleted: false },
		{ id: uuidv4(), text: 'Learn Tailwind CSS', isCompleted: false },
	])

	console.log(todos)

	const handleAddTodo = (text: string) => {
		const newTodo: Todo = {
			id: uuidv4(),
			text: text,
			isCompleted: false,
		}
		setTodos([...todos, newTodo])
	}

	const handleDeleteTodo = (id: string) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleUpdateTodo = (todo: Todo) => {
		setTodos(todos.map(t => (t.id === todo.id ? todo : t)))
	}

	return (
		<ul className="space-y-2 ">
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleDeleteTodo={handleDeleteTodo}
					handleUpdateTodo={handleUpdateTodo}
				/>
			))}
		</ul>
	)
}
