import type {todoType} from "../model/TodoType.ts";
import type {FC} from "react";


type todoPropsType = {
    item: todoType
}

const TodoItemComponent: FC <todoPropsType> = ({item}) => {
    return (
        <li>

            <div className="todo">
                <label htmlFor="check-lable">
                    {/*<input  type="checkbox" id="check-lable" checked={item.completed}/>*/}
                    {item.text}
                </label>
                <div className="todo-button">
                    <button>delete</button>
                    <button>edit</button>
                </div>
            </div>


        </li>
    );
};

export default TodoItemComponent;