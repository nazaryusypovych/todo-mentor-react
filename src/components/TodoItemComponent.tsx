import type {todoType} from "../model/TodoType.ts";
import type {FC} from "react";


type todoPropsType = {
    item: todoType,
    onDelete: (id: number) => void
}

const TodoItemComponent: FC <todoPropsType> = ({item, onDelete}) => {
    return (
        <li>

            <div className="todo">
                <label htmlFor="check-lable">
                    {/*<input  type="checkbox" id="check-lable" checked={item.completed}/>*/}
                    {item.text}
                </label>
                <div className="todo-button">
                    <button onClick={ ()=> onDelete(item.id)}>delete</button>
                    <button>edit</button>
                </div>
            </div>


        </li>
    );
};

export default TodoItemComponent;