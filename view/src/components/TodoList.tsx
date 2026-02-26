import React from 'react'
import type { Task } from '../model'
import { Check, Trash2 } from 'lucide-react' // ✅ lucide icons

interface Props {
  todos: Task[],
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}

const TodoList: React.FunctionComponent<Props> = ({ todos, setTodos }) => {

  // Toggle completed
  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ))
  }

  // Delete task
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='mt-6 space-y-2 w-full'>
      {todos.length === 0 && (
        <p className='text-center text-gray-400 text-sm mt-4'>No tasks yet. Add one above!</p>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl shadow-sm text-sm text-gray-700 list-none'
        >
          {/* Task info */}
          <div className='flex items-center gap-3'>
            <span className={`w-2 h-2 rounded-full shrink-0 ${todo.isCompleted ? 'bg-green-400' : 'bg-blue-400'}`} />
            <span className={todo.isCompleted ? 'line-through text-gray-400' : ''}>{todo.text}</span>
          </div>

          {/* Action buttons */}
          <div className='flex items-center gap-2'>
            <button 
              onClick={() => handleToggle(todo.id)}
              className='p-1 rounded-full hover:bg-green-100 transition'
              title="Mark Complete"
            >
              <Check size={16} className={todo.isCompleted ? 'text-green-500' : 'text-gray-400'} />
            </button>

            <button 
              onClick={() => handleDelete(todo.id)}
              className='p-1 rounded-full hover:bg-red-100 transition'
              title="Delete Task"
            >
              <Trash2 size={16} className='text-red-500' />
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList