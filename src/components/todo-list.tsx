import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './todo-item'
import TodoComposer from './todo-composer'

export type Todo = {
	id: string
	label: string
	isCompleted: boolean
}

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([
		{ id: uuidv4(), label: 'Learn React', isCompleted: false },
		{ id: uuidv4(), label: 'Learn TypeScript', isCompleted: false },
		{ id: uuidv4(), label: 'Learn Tailwind CSS', isCompleted: false },
	])

	const handleUpdateTodo = (updatedTodo: Todo) => {
		setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)))
	}

	const handleDeleteTodo = (id: string) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const handleAddTodo = (newTodo: Todo) => {
		setTodos([...todos, newTodo])
	}

	return (
		<>
			<h1 className="text-3xl font-bold">Todo List</h1>
			<ul className="space-y-2 w-full max-w-xl">
				<TodoComposer handleAddTodo={handleAddTodo} />
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleUpdateTodo={handleUpdateTodo}
						handleDeleteTodo={handleDeleteTodo}
					/>
				))}
			</ul>
		</>
	)
}
