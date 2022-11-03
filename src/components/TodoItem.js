const TodoItem = ({ todoList, todoObj, onCheck, onDelete }) => {

    // 削除機能
    const onClickDelete = (todoId) => {
        onDelete(todoId);
    };

    // チェックボックス
    const onClickSwitch = (todoId) => {
        onCheck(todoId);
    };

    return (
        <table>
            <tbody>
                {todoList.map((todoId) => (
                    <tr
                        key={todoId}
                        className={todoObj[todoId].status ? "isChecked" : ""}
                    >
                        <td><input
                            onChange={() => onClickSwitch(todoId)}
                            type="checkbox"
                            checked={todoObj[todoId].status}
                            className="taskStatus"
                        />
                        </td>
                        <td className="taskName">{todoObj[todoId].comment}</td>
                        <td><button
                            onClick={() => onClickDelete(todoId)}
                            className="delTask"
                        >－</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoItem;