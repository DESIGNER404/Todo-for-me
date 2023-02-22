import React, { useState } from 'react'
import TodoItem from './item/TodoItem'

const data = [
    {
        _id: 'sa123c',
        title: 'finish',
        isComplited: false,
    },
    {
        _id: 'awe123sd',
        title: 'lol',
        isComplited: false,
    },
    {
        _id: 'sa123dsd',
        title: 'finish',
        isComplited: false,
    },
    {
        _id: 'sa123ggg',
        title: 'finish',
        isComplited: false,
    },
    {
        _id: 'sa123asda',
        title: 'finish',
        isComplited: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
        alert(...todos.map(todo => todo._id))
    }

    return (
        <div className="bg-gray-900 h-screen text-white w-4/5 mx-auto">
            <h1 className='text-3xl font-bold mb-4 text-center'>MY TODO</h1>
            {todos.map(todo => (
                <TodoItem key = {todo._id} todo = {todo} changeTodo = {changeTodo} removeTodo = {removeTodo} />
            ))}
        </div>
    )
}

export default Home
