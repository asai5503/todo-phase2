import { useState } from "react";
import { DayOfWeekTitle, TodoInput, TodoItem, db } from "./index";
import { collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoObj, setTodoObj] = useState({});

  // 追加機能
  const handleAdd = async (title) => {

    try {
      const doc = await addDoc(collection(db, "todos"), {
        comment: title,
        status: false
      });

      const newTodoId = doc.id;

      const newTodo = {
        [newTodoId]: {
          comment: title,
          status: false
        }
      };

      setTodoObj({ ...todoObj, ...newTodo });
      setTodoList([...todoList, newTodoId]);

    } catch (e) {
      console.log("todo追加時にエラー発生",e);
    }
  };

  /**
   * todoObjとtodoListから、受け取ったtodoIdの内容を削除する
   * @param {String} todoId
   */
  const handleDelete = (todoId) => {
    const _todoObj = { ...todoObj };
    delete _todoObj[todoId];
    setTodoObj(_todoObj);

    const removedTodoList = todoList.filter((_todoId) => _todoId !== todoId);
    setTodoList(removedTodoList);

    //firestoreの値を更新
    try {
      deleteDoc(doc(db, "todos", todoId));
    } catch (e) {
      console.log("todo削除時にエラー発生",e);
    }
  };

  /**
   * 受け取ったtodoIdのtodo.statusを反転させる
   * @param {String} todoId
   */
  const handleCheck = (todoId) => {
    const _todoObj = { ...todoObj };
    _todoObj[todoId].status = !_todoObj[todoId].status;
    setTodoObj(_todoObj);

    //firestoreの値を更新
    try {
      const statusRef = doc(db, "todos", todoId);

      updateDoc(statusRef, {
        status: _todoObj[todoId].status
      });
    } catch (e) {
      console.log("todo.statusの反転時にエラー発生",e);
    }

  };

  return (
    <div className="taskArea">
      <DayOfWeekTitle />
      <TodoInput
        onAdd={handleAdd} />
      <TodoItem
        todoList={todoList}
        todoObj={todoObj}
        setTodoList={setTodoList}
        setTodoObj={setTodoObj}
        onCheck={handleCheck}
        onDelete={handleDelete} />
    </div>
  );
};

export default Todo;