import React, {useState} from 'react';

const AddTodo = ({list}) =>{
    const [text,setText] = useState('');

    //フォームの状態管理
    const onChangeText = (event) =>{
        setText(event.target.value);
    };
    
    const onClickAdd = () => {
        if (text === "") return;
            const newTodo = {
              comment: text,
              status: false
            }
        // list.push(newTodo);
        
        setText('');  
      };

    return(
        <>
        <div className="addTodo">
          <input
             onChange={onChangeText}
             value={text}
             placeholder="Add Task"
           />
          <button onClick={onClickAdd}>＋</button>
        </div>
        </>
    );
};

export default AddTodo;