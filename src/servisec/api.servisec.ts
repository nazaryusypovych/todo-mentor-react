import type {todoResponseType} from "../model/TodoType.ts";





export const todoServices = {
    getTodos: async (page:number=1):Promise<todoResponseType> =>{
        return await fetch(`http://localhost:3000/todos?`+ `page=` + page)
            .then(response => response.json())
    },

    getTodo: async (id: number) =>{
        return await fetch(`http://localhost:3000/todos` + `/${id}`)
            .then(response => response.json())
    },

    deleteTodo: async (id: number) =>{
        return await fetch(`http://localhost:3000/todos` + `/${id}`, {
            method: "DELETE"
        })
    },

    createTodo: async (text: string) => {
        return await fetch(`http://localhost:3000/todos`, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })

        })
    }
}