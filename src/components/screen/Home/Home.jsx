import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import Header from './Header'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
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
    }

    return (
        <div className="bg-gray-900 h-screen text-white w-4/5 mx-auto">
            <Header />
            <h1 className='text-3xl font-bold mb-4 text-center'>Quest List</h1>
            {todos.map(todo => (
                <TodoItem key = {todo._id} todo = {todo} changeTodo = {changeTodo} removeTodo = {removeTodo} />
            ))}
            <CreateTodoField setTodos = {setTodos} />
        </div>
    )
}

export default Home
