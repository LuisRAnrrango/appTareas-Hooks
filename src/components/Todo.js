import React, { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {
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

    function handleClickUpdateTodo() {
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
        <button className="btn btn-secondary" onClick={handleClickUpdateTodo}>
          Update
        </button>
      </fom>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button className="btn btn-primary" onClick={() => setIsEdit(true)}>
          Editar
        </button>
        <button class="btn btn-danger" onClick={(e) => onDelete(item.id)}>
          Delete
        </button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
