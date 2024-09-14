import { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Todo } from './todo-list'

export default function TodoItem({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
}: {
	todo: Todo
	handleUpdateTodo: (updatedTodo: Todo) => void
	handleDeleteTodo: (id: string) => void
}) {
	const [editing, setEditing] = useState(false)

	const handleCheckboxClick = () => {
		handleUpdateTodo({ ...todo, isCompleted: !todo.isCompleted })
	}
	const handleEditClick = () => setEditing(!editing)
	const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleUpdateTodo({ ...todo, label: e.target.value })
	}
	const handleDeleteClick = () => handleDeleteTodo(todo.id)

	return (
		<li>
			<Label htmlFor={todo.id} className="flex gap-1 items-center">
				<Checkbox checked={todo.isCompleted} id={todo.id} onCheckedChange={handleCheckboxClick} />
				{editing ? (
					<input
						type="text"
						value={todo.label}
						onChange={handleEditTodo}
						className="bg-slate-100"
					/>
				) : (
					<span className={todo.isCompleted ? 'line-through' : ''}>{todo.label}</span>
				)}
			</Label>
			<Button variant="link" onClick={handleEditClick} className="text-xs text-slate-500 ml-auto">
				{editing ? 'Save' : 'Edit'}
			</Button>
			<Button variant="link" onClick={handleDeleteClick} className="text-xs text-slate-500">
				Delete
			</Button>
		</li>
	)
}
