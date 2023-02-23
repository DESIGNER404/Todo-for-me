import React, {useState} from 'react'

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prew => [{
            _id: new Date(),
            title,
            isComplited: false
        }, ...prew])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl px-5 py-2 w-full border-zinc-800 border-2'>
            <input type="text" 
            onChange = {e => setTitle(e.target.value)} 
            value = {title} 
            onKeyPress = {e => e.key === "Enter" && addTodo(title)} 
            className='bg-transparent w-full border-none outline-none' placeholder='Enter Quest' />
        </div>
    )
}

export default CreateTodoField
