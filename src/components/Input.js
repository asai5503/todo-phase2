import React, {useState} from "react";

const Input = ({onAdd}) =>{
    const [text,setText] = useState("");

    //フォームの状態管理
    const onChangeText = (event) =>{setText(event.target.value)};
    
    const onClickAdd = () => {
        if (text === "") return;
        onAdd(text);
        setText("");  
      };

    return(
        <>
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
        </>
    );
};

export default Input;