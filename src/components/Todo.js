import React, {useState} from "react";
import { Title,Input,Item } from "./index";

const getKey = () => Math.random().toString(32).substring(2);

const Todo = () =>{
    const [list,setList] = useState([]);

    // 追加機能
    const handleAdd = (event) =>{
      setList([...list, {key: getKey(), comment: event ,status: false}]);
    };

    //削除機能
    const handleDelete = (event) => {
      const delItems = list.filter(item => item.key !== event.key);
      setList(delItems);
    };

    //チェックボックス機能
    const handleCheck = (event) => {
      const newItems = list.map(item => {
        if (item.key === event.key) {
          item.status = !item.status;
        }
        return item;
      });
      setList(newItems);
    };

    return(
        <>
        <div className="taskArea">
          <Title/>
          <Input
            onAdd={handleAdd}
          />
          <table>
          <tbody id="todoBody">
            {list.map((item) => (
            <Item 
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