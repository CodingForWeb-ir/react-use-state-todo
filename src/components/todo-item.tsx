import { useState } from 'react'
import type { Todo } from './todo-list'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

export default function TodoItem({
	todo,
	handleDeleteTodo,
	handleUpdateTodo,
}: {
	todo: Todo
	handleDeleteTodo: (id: string) => void
	handleUpdateTodo: (todo: Todo) => void
}) {
	const handleCheckboxClick = () => {
		handleUpdateTodo({
			...todo,
			isCompleted: !todo.isCompleted,
		})
	}

	return (
		<li>
			<Label htmlFor={todo.id} className="flex gap-1 items-center">
				<Checkbox checked={todo.isCompleted} id={todo.id} onCheckedChange={handleCheckboxClick} />
				<span>{todo.text}</span>
			</Label>
		</li>
	)
}
