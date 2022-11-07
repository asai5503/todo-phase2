import { useEffect, useState } from "react";
import { db } from "./index";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const TodoItem = ({ todoList, todoObj, onCheck, onDelete }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //データベースからデータを取得する
    const todoData = collection(db, "todos");
    getDocs(todoData).then((snapShot) => {
      setTodos(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムで取得
    onSnapshot(todoData, (todo) => {
      setTodos(todo.docs.map((doc) => ({ ...doc.data() })));
    });

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
    <table>
      <tbody>
        {todos.map((todo) => (
          <tr
            key={todo.todoId}
          >
            <td><input
              onChange={() => onClickSwitch(todo.todoId)}
              type="checkbox"
              checked={todo.status}
              className="taskStatus"
            />
            </td>
            <td className="taskName">{todo.comment}</td>
            <td><button
              onClick={() => onClickDelete(todo.todoId)}
              className="delTask"
            >－</button></td>
          </tr>
        ))}
      </tbody>
    </table>

    // <table>
    //   <tbody>
    //     {todoList.map((todoId) => (
    //       <tr
    //         key={todoId}
    //         className={todoObj[todoId].status ? "isChecked" : ""}
    //       >
    //         <td><input
    //           onChange={() => onClickSwitch(todoId)}
    //           type="checkbox"
    //           checked={todoObj[todoId].status}
    //           className="taskStatus"
    //         />
    //         </td>
    //         <td className="taskName">{todoObj[todoId].comment}</td>
    //         <td><button
    //           onClick={() => onClickDelete(todoId)}
    //           className="delTask"
    //         >－</button></td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};

export default TodoItem;