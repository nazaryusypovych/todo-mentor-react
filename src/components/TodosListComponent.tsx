import {useEffect, useState} from "react";
import type {todoType} from "../model/TodoType.ts";
import TodoItemComponent from "./TodoItemComponent.tsx";
import {todoServices} from "../servisec/api.servisec.ts";
import PaginationComponent from "./PaginationComponent.tsx";


const TodosListComponent = () => {


    const [todos, setTodos] = useState <todoType[]>([]);

    //Працює коли завантається сторінка
    useEffect(() =>{
        todoServices.getTodos()
             .then((todos) => setTodos(todos));
    }, [])

    //Працює коли нажимаємо на кнопку
    const handlePageChange = (page: number) => {
        console.log(page);
        todoServices.getTodos(page)
            .then((todos) => setTodos(todos));

    }


    return (
        <div>
            <ul>

                {
                    todos.map(todo => <TodoItemComponent key={todo.id} item={todo}/>)
                }

            </ul>

            <PaginationComponent onPageChange={handlePageChange}/>
        </div>


    );
};

export default TodosListComponent;