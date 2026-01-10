import './TodoPage.css';
import TodosListComponent from "../../components/TodosListComponent.tsx";

const TodoPage = () => {
    return (
        <div>

            <div className="container">
                <h1>TODO (JSON)</h1>


                <form id="todoForm" name="todoForm">
                    <textarea id="text" placeholder="Text" required></textarea>
                    <div className="row">
                        <button type="submit">Add todo</button>
                    </div>
                </form>


                <h2>Notes</h2>
                <TodosListComponent/>


                <ul className="todo-status"></ul>
            </div>

        </div>
    );
};

export default TodoPage;