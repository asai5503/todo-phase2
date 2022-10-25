const TodoItem = ({ todos, onCheck, onClick }) => {

    // 削除機能
    const onClickDelete = (item) => {
        onClick(item);
    };

    // チェックボックス
    const onClickSwitch = (item) => {
        onCheck(item);
    };

    return (
        <table>
            <tbody>
                {todos.map((item) => (
                    <tr key={item.key} className={item.status ? "isChecked" : ""}>
                        <td><input
                            onChange={() => onClickSwitch(item)}
                            type="checkbox"
                            checked={item.status}
                            className="taskStatus"
                        />
                        </td>
                        <td className="taskName">{item.comment}</td>
                        <td><button
                            onClick={() => onClickDelete(item)}
                            className="delTask"
                        >－</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TodoItem;