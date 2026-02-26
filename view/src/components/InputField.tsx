import React from 'react'

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:FormEvent<HTMLFormElement>)=>void
}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
  return (
    <div className='flex justify-center mt-10'>
      <form action="" onSubmit={handleAdd}>
        <div className='relative w-96'>
          <input
           value={todo}
           onChange={(e)=>setTodo(e.target.value)}
            type="text"
            placeholder='Enter your task...'
            className='w-full px-4 py-2 pr-20 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <span className='absolute right-1 top-1 bottom-1'>
            <button
              type="submit"
              className=' hover:bg-blue-900 cursor-pointer h-full px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200'
            >
              ADD
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}

export default InputField