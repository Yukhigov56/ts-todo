import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface todoTasks {
    id: number,
    todo: string
}

interface todoApp {
    todos: todoTasks[]
}

const initialState: todoApp = {
    todos: []
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
        }
    }
})


export const { addTasks } = tasksSlice.actions
export default tasksSlice.reducer