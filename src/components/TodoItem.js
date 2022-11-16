import { useEffect } from "react";
import { db } from "./index";
import { collection, getDocs } from "firebase/firestore";

const TodoItem = ({ todoList, setTodoList, todoObj, setTodoObj, onCheck, onDelete }) => {

  useEffect(() => {
    try {
      //データベースからデータを取得する
      async function fetchTodos() {
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

      fetchTodos();

    }catch(e){
      console.log("todo追加時にエラー発生",e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 削除機能
  const handleDelete = (todoId) => {
    onDelete(todoId);
  };

  // チェックボックス
  const handleCheck = (todoId) => {
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
                onChange={() => handleCheck(todoId)}
                type="checkbox"
                checked={todoObj[todoId].status}
                className="taskStatus"
              />
              </td>
              <td className="taskName">{todoObj[todoId].comment}</td>
              <td><button
                onClick={() => handleDelete(todoId)}
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