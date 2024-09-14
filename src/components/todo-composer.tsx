import { useState } from 'react'
import { Todo } from './todo-list'
import { v4 as uuidv4 } from 'uuid'
import { Button } from './ui/button'

function createTodo(label: string): Todo {
	return {
		id: uuidv4(),
		label,
		isCompleted: false,
	}
}

export default function TodoComposer({
	handleAddTodo,
}: {
	handleAddTodo: (newTodo: Todo) => void
}) {
	const [label, setLabel] = useState('')

	const handleUpdateLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLabel(e.target.value)
	}

	const handleAddTodoClick = () => {
		handleAddTodo(createTodo(label))
		setLabel('')
	}

	return (
		<li>
			<input
				type="text"
				value={label}
				onChange={handleUpdateLabel}
				className="bg-slate-100 w-full placeholder:italic"
				placeholder="Add a new todo..."
			/>
			<Button
				onClick={handleAddTodoClick}
				variant="link"
				disabled={label.length === 0}
			>
				Add Todo
			</Button>
		</li>
	)
}
