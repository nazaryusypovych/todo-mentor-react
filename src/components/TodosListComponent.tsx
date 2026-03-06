import {useEffect, useState} from "react";
import type {todoResponseType} from "../model/TodoType.ts";
import TodoItemComponent from "./TodoItemComponent.tsx";
import {todoServices} from "../servisec/api.servisec.ts";
import PaginationComponent from "./PaginationComponent.tsx";


const TodosListComponent = () => {


    const [data, setData] = useState <todoResponseType>();
    const [newItemText, setNewItemText] = useState <string>(``);

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


    const handleItemEdit = (id: number, newText: string) => {
        todoServices.updateTodo(id, newText)

    }



    const handleItemDelete = (id: number) =>{
        if(!data?.list){
           return;
        }

        const filteredList = data?.list.filter(item => item.id != id);
        setData({
            ...data,
            list: filteredList
        })

        todoServices.deleteTodo(id).
        then(()=>{
            console.log(data.list)
            if(!filteredList.length){
                if (data.meta.page> 1){
                    handlePageChange(data.meta.page - 1)
                }
            }
        })

    }

    const handleCreateItem = (e:React.FormEvent) =>{
    e.preventDefault();
    todoServices.createTodo(newItemText).
    then(()=>{handlePageChange(1)});

    }


    return (
        <div>
            <form  id="todoForm" name="todoForm">
                    <textarea id="text" placeholder="Text" onChange={(e)=>{
                        setNewItemText(e.target.value)
                    }}
                    ></textarea>
                <div className="row">
                    <button onClick={handleCreateItem} type="submit">Add todo</button>
                </div>
            </form>


            <ul>

                {
                    data?.list.map(data => <TodoItemComponent key={data.id} item={data} onDelete={handleItemDelete} onEdit={handleItemEdit}/>)
                }

            </ul>

            <PaginationComponent page={data?.meta.page || 1} total={data?.meta.total || 0}
                                 perPage={data?.meta.perPage || 0} onPageChange={handlePageChange}/>
        </div>


    );
};

export default TodosListComponent;