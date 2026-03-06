import type {todoType} from "../model/TodoType.ts";
import {type FC, useState} from "react";


type todoPropsType = {
    item: todoType,
    onDelete: (id: number) => void,
    onEdit: (id: number, text: string) => void
}

const TodoItemComponent: FC <todoPropsType> = ({item, onDelete, onEdit}) => {

    const [isEditing, setIsEditing] = useState <boolean>(false);
    const [inputValue, setInputValue] = useState <string>(item.text);

    const handleEdit = () => {
        onEdit(item.id, inputValue);
        setIsEditing(false);

    }




    return (
        <li>

            <div className="todo">
                <label htmlFor="check-lable">
                    {isEditing ? (
                        <input type="text" autoFocus value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    ) : (
                        <span>{inputValue}</span>
                    )}
                </label>
                <div className="todo-button">
                    <button onClick={ ()=> onDelete(item.id)}>delete</button>

                    {isEditing ? (
                        <button onClick={ ()=> handleEdit()}>Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)}>edit</button>
                    )}
                </div>
            </div>


        </li>
    );
};

export default TodoItemComponent;