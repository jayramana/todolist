// import React from "react";
// import "./index.css";
// import { FaTrashAlt } from "react-icons/fa";

// const Content = ({ items, handleClick, Delete }) => {
//   return (
//     <main>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <input
//               type="checkbox"
//               className="tick"
//               checked={item.checked}
//               onChange={() => handleClick(item.id)}
//             />
//             <p className="tasks">{item.name}</p>
//             <FaTrashAlt onClick={() => Delete(item.id)} />
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default Content;
import React, { useState } from "react";
import "./index.css";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";

const Content = ({ items, handleClick, handleEdit, handleDelete }) => {
  const [editItemId, setEditItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");

  const startEdit = (id, name) => {
    setEditItemId(id);
    setEditedItemName(name);
  };

  const cancelEdit = () => {
    setEditItemId(null);
    setEditedItemName("");
  };

  const saveEdit = (id) => {
    handleEdit(id, editedItemName);
    cancelEdit();
  };
  const activeItems = items.filter((item) => item.checked === true)
  const inActiveItems = items.filter((item)=>item.checked === false)
  return (
    <main className="Content">
      <ul className="flex">
        <section className="active">
        <p className="txt act">ACTIVE TASKS</p>

        {activeItems.map((item) => (
          
          <li key={item.id} className="tasklst">
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editedItemName}
                  onChange={(e) => setEditedItemName(e.target.value)}
                  />
                <FaCheck onClick={() => saveEdit(item.id)} className="clicks" />
                <FaUndo onClick={()=> cancelEdit() } className="undo" />
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  className="tick amb"
                  checked={item.checked}
                    onChange={() => handleClick(item.id)}
                  />
                  <p className="tasks ac">{item.name}</p>
                  <div className="iconic">

                <FaEdit onClick={() => startEdit(item.id, item.name)} className="edit" />
                <FaTrashAlt onClick={() => handleDelete(item.id)} className="delete"/>
                  </div>
              </>
            )}
          </li>
        ))}
        </section>
        <section className="inactive">
        <p className="txt ina">INACTIVE TASKS</p>

        {inActiveItems.map((item) => (
          
          <li key={item.id} className="tasklst">
            {editItemId === item.id ? (
              <>
                <input
                  type="text"
                  value={editedItemName}
                  onChange={(e) => setEditedItemName(e.target.value)}
                />
                                  <div className="iconic">

                <FaCheck onClick={() => saveEdit(item.id)} className="clicks" />
                <FaUndo onClick={()=> cancelEdit() } className="undo" />
                  </div>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  className="tick inac"
                  checked={item.checked}
                  onChange={() => handleClick(item.id)}
                  />
                  <p className="tasks inact">{item.name}</p>
                  <div className="iconic">

                <FaEdit onClick={() => startEdit(item.id, item.name)} className="edit" />
                <FaTrashAlt onClick={() => handleDelete(item.id)} className="delete"/>
                  </div>
              </>
            )}
          </li>
        ))}
                  </section>
      </ul>
    </main>
  );
};

export default Content;
