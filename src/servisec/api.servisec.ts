import type {todoType} from "../model/TodoType.ts";





export const todoServices = {
    getTodos: async (page:number=1):Promise<todoType[]> =>{
        return await fetch(`http://localhost:3000/todos?`+ `page=` + page)
            .then(response => response.json())
    },

    getTodo: async (id: number) =>{
        return await fetch(`http://localhost:3000/todos` + `/${id}`)
            .then(response => response.json())
    }
}