import {useEffect, useState} from "react";
import type {todoType} from "../model/TodoType.ts";
import TodoItemComponent from "./TodoItemComponent.tsx";
import {todoServices} from "../servisec/api.servisec.ts";


const TodosListComponent = () => {

    const [todos, setTodos] = useState <todoType[]>([]);

    useEffect(() =>{
        todoServices.getTodos()
            .then((todos) => setTodos(todos));
    }, [])


    return (
        <ul>

            {
                todos.map(todo => <TodoItemComponent key={todo.id} item={todo}/>)
            }

        </ul>
    );
};

export default TodosListComponent;