import { connect } from "react-redux";
import Todo from "./Todo";
import {
    removeTodoByIndex,
    changeTodoStatus,
} from "../todo_store/todoReducer/TodoActionCreator";

const TodoList = ({ todos, changeStatus, removeTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <Todo
                        index={index}
                        todo={todo}
                        statusChangeHandler={changeStatus}
                        removeHandler={removeTodo}
                    />
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = ({ TodoReducer }) => {
    return {
        todos: TodoReducer.todos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus: (index, status) =>
            dispatch(changeTodoStatus(index, status)),
        removeTodo: (index) => dispatch(removeTodoByIndex(index)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
