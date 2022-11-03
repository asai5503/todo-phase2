import { useState } from "react";
import { DayOfWeekTitle, TodoInput, TodoItem } from "./index";
import { v4 as uuidv4 } from "uuid";

const getKey = () => uuidv4();

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoObj, setTodoObj] = useState({});

  // 追加機能
  const handleAdd = (title) => {
    const todoId = getKey();
    const newTodo = {
      [todoId]: {
        comment: title,
        status: false
      }
    }

    setTodoObj({ ...todoObj, ...newTodo });
    setTodoList([...todoList, todoId]);
    console.log(todoId);
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
  };

  /**
   * 受け取ったtodoIdのtodo.statusを反転させる
   * @param {String} todoId
   */
  const handleCheck = (todoId) => {
    const _todoObj = { ...todoObj };
    _todoObj[todoId].status = !_todoObj[todoId].status;
    setTodoObj(_todoObj);
  };

  return (
    <>
      <div className="taskArea">
        <DayOfWeekTitle />
        <TodoInput onAdd={handleAdd} />
        <TodoItem
          todoList={todoList}
          todoObj={todoObj}
          onCheck={handleCheck}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Todo;