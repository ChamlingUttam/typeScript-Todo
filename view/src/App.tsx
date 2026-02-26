import React, { useState } from 'react'
import InputField from './components/InputField'
import { type Task } from './model'

const App: React.FunctionComponent = () => {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Task[]>([])

  const handleAdd = (e:FormEvent<HTMLFormElement> )=>{
    e.preventDefault()

    if(todo){
      setTodos([...todos,{id:Date.now(),text:todo,isCompleted:false}])
      setTodo("")
    }
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900'>
      
      <div className='bg-white p-8 rounded-xl shadow-xl w-[400px] text-center'>
        <h1 className='font-bold text-3xl mb-6 text-gray-800 tracking-wide'>
          TO-DO-LIST
        </h1>

        <InputField todo={todo} setTodo={setTodo}  handleAdd={handleAdd}/>
      </div>

    </div>
  )
}

export default App