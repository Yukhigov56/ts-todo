import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface todoTasks {
    id: number,
    todo: string
}

interface todoApp {
    todos: todoTasks[]
}

const initialState: todoApp = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
}

const tasksSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<string>) => {
            const newTodo: todoTasks = {
                todo: action.payload,
                id: Date.now()
            }
            state.todos.push(newTodo)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },

        removeTasks: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos))
        }
    }
})


export const { addTasks, removeTasks } = tasksSlice.actions
export default tasksSlice.reducer