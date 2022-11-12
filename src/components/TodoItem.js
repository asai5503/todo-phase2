import { useEffect } from "react";
import { db } from "./index";
import { collection, getDocs } from "firebase/firestore";

const TodoItem = ({ todoList, setTodoList, todoObj, setTodoObj, onCheck, onDelete }) => {

  useEffect(() => {
    //データベースからデータを取得する
    async function docsData() {
      const snapshot = await getDocs(collection(db, "todos"));

      snapshot.forEach((doc) => {
        const newTodoId = doc.id;
        const newTodo = {
          [newTodoId]: doc.data()
        };

        setTodoObj((todoObj) => ({ ...todoObj, ...newTodo }));
        setTodoList((todoList) => ([...todoList, newTodoId]));

      });
    };

    docsData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 削除機能
  const onClickDelete = (todoId) => {
    onDelete(todoId);
  };

  // チェックボックス
  const onClickSwitch = (todoId) => {
    onCheck(todoId);
  };

  return (
    <>
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
    </>
  );
};

export default TodoItem;