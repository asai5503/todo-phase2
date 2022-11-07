import { useState } from "react";
// import { db } from "./index";
// import { collection, addDoc } from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";

// const getKey = () => uuidv4();

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  //フォームの状態管理
  const onChangeText = (event) => { setText(event.target.value) };

  const onClickAdd = () => {
    if (text === "") return;
    onAdd(text);
    setText("");

    // try {
    //   const docRef = addDoc(collection(db, "todos"), {
    //     comment: text,
    //     status: false,
    //     todoId:getKey()
    //   });
    //   console.log("Document written with ID: ", docRef.todoId);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

  };

  return (
    <div className="addTodo">
      <input
        onChange={onChangeText}
        placeholder="Add Task"
        value={text}
      />
      <button
        onClick={onClickAdd}
        className="addTask"
      >＋</button>
    </div>
  );
};

export default TodoInput;