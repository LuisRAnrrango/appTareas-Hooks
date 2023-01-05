import React, { useState } from "react";

export default function Todo({ item,onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  //Declaracion de un componente dento de otro componente
  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
      e.prevetDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo(){
onUpdate(item.id, newValue);
setIsEdit(false);
    }

    return (
      <fom className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        ></input>
        <button className="buttom" onClick={handleClickUpdateTodo}>Update</button>
      </fom>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => setIsEdit(true)}>Editar</button>
        <button>Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
