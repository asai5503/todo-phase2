import React, {useState} from 'react';
import { Title } from './index';

const Todo = () =>{
    const [text,setText] = useState('');
    const [list,setList] = useState([]);

    //フォームの状態管理
    const onChangeText = (event) =>{
        setText(event.target.value);
        console.log(text);
    };

    // 追加機能
    const onClickAdd = () => {
      if (text === "") return;
          const newTodo = {
            comment: text,
            status: false
          }
      list.push(newTodo);
      console.log(list)
      setText('');  
    };

    //削除機能
    const onClickDelete = (index) =>{
      console.log("onClickDelete");
      const deleteList = [...list];
      deleteList.splice(index,1);
      setList(deleteList);
    };

    //チェックボックス
    const onClickSwitch = (checked,index) =>{
      console.log("onClickSwitch");
      console.log(index);
    };

    return(
        <>
        <div className="taskArea">
          <Title/>
          <div className="addTodo">
            <input onChange={onChangeText}
              value={text}
              placeholder="Add Task"
            />
            <button onClick={onClickAdd}>＋</button>
          </div>
          <table>
            <tbody id="todoBody">
              {list.map((todo, index) => (
                <tr>
                  <td><input onClick={() => onClickSwitch(index)}
                        type="checkbox"
                        checked = {list.status}/>
                      </td>
                  <td className="taskName">{todo.comment}</td>
                  <td><button onClick={() => onClickDelete(index)}>－</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Todo;