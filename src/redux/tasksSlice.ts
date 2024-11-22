import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface todoTasks {
    todos: string[]
}

const initialState: todoTasks = {
    todos: ['']
}

const tasksSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<string>) => {
            state.todos.push(action.payload)
        }
    }
})


export const { addTasks } = tasksSlice.actions
export default tasksSlice.reducer