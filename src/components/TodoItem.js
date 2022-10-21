const TodoItem = ({ item, onCheck, onClick }) => {

    // 削除機能
    const onClickDelete = () => {
        onClick(item);
    };

    // チェックボックス
    const onClickSwitch = () => {
        onCheck(item);
    };

    return (
        <tr className={item.status ? "isChecked" : ""}>
            <td><input
                onChange={() => onClickSwitch(item.key)}
                type="checkbox"
                checked={item.status}
                className="taskStatus"
            />
            </td>
            <td className="taskName">{item.comment}</td>
            <td><button
                onClick={() => onClickDelete(item.key)}
                className="delTask"
            >－</button></td>
        </tr>
    );
};

export default TodoItem;