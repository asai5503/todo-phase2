import React, {useState} from 'react';

const List = () =>{
    const [list,setList] = useState([]);

    //削除機能
    const onClickDelete = (index) =>{
        console.log("onClickDelete");
        const deleteList = [...list];
        deleteList.splice(index,1);
        setList(deleteList);
      };
  
      //チェックボックス
      const onClickSwitch = (index) =>{
        console.log("onClickSwitch");
        console.log(index);
  
        const changeList = [...list];
        changeList[index].status = !changeList[index].status;
        console.log(changeList);
        setList(changeList);
  
      };

    return(
        <>
        <table>
        <tbody id="todoBody">
            {list.map((todo, index) => (
            <tr key={index} className = {todo.status ? "isChecked":""}>
                <td><input onChange={() => onClickSwitch(index)}
                    type="checkbox"
                    checked = {todo.status}
                    />
                    </td>
                <td className="taskName">{todo.comment}</td>
                <td><button onClick={() => onClickDelete(index)}>－</button></td>
            </tr>
            ))}
        </tbody>
        </table>
        </>
    );
};

export default List;