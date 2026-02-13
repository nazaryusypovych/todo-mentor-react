import {useEffect, useState} from "react";
import type {todoResponseType} from "../model/TodoType.ts";
import TodoItemComponent from "./TodoItemComponent.tsx";
import {todoServices} from "../servisec/api.servisec.ts";
import PaginationComponent from "./PaginationComponent.tsx";


const TodosListComponent = () => {


    const [data, setData] = useState <todoResponseType>();

    //Працює коли завантається сторінка
    useEffect(() =>{
        todoServices.getTodos()
             .then((response) => setData(response));
    }, [])

    //Працює коли нажимаємо на кнопку
    const handlePageChange = (page: number) => {
        console.log(page);
        todoServices.getTodos(page)
            .then((response) => setData(response));

    }


    return (
        <div>
            <ul>

                {
                    data?.list.map(data => <TodoItemComponent key={data.id} item={data}/>)
                }

            </ul>

            <PaginationComponent  total={data?.meta.total || 0} perPage={data?.meta.perPage || 0} onPageChange={handlePageChange} />
        </div>


    );
};

export default TodosListComponent;