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
  const handleCheck = (event) => {
    const newItems = todos.map(item => {
      if (item.key === event.key) {
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
        <table>
          <tbody>
            {todos.map((item) => (
              <TodoItem
                key={item.key}
                item={item}
                onCheck={handleCheck}
                onClick={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;