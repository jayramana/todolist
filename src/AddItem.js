import React from "react";
import { IoIosAdd } from "react-icons/io";

const AddItem = ({ newItems, setnewItems, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="form-add">
      <input
        type="text"
        placeholder="Add a task"
        value={newItems}
        onChange={(e) => setnewItems(e.target.value)}
        className="input"
      />
      <IoIosAdd role="button" onClick={handleSubmit} className="add"/>
    </form>
  );
};

export default AddItem;
