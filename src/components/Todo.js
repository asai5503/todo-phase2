import { useState } from "react";
import { DayOfWeekTitle, TodoInput, TodoItem } from "./index";

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // 追加機能
  const handleAdd = (title) => {
    const newTodo = {
      key: getKey(),
      comment: title,
      status: false
    }

    setTodos([...todos, newTodo]);
  };

  //削除機能
  const handleDelete = (todoItem) => {
    const removedTodos = todos.filter(item => item.key !== todoItem.key);
    setTodos(removedTodos);
  };

  //チェックボックス機能
  const handleCheck = (checkedItem) => {
    const newItems = todos.map(item => {
      if (item.key === checkedItem.key) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(newItems);
  };

  return (
    <>
      <div className="taskArea">
        <DayOfWeekTitle />
        <TodoInput
          onAdd={handleAdd}
        />
        <TodoItem
          todos={todos}
          onCheck={handleCheck}
          onClick={handleDelete}
        />
      </div>
    </>
  );
};

export default Todo;