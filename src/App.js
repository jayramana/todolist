

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState(() => {
    // Load items from localStorage or use a default value
    const storedItems = localStorage.getItem('todolist');
    return storedItems ? JSON.parse(storedItems) : [
      // { id: 1, checked: true, name: 'Go to the Gym' },
      // { id: 2, checked: true, name: 'Play genshin with friends' },
      // { id: 3, checked: false, name: 'Read a Book' },
    ];
  });

  const [newItems, setnewItems] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    // Save items to localStorage whenever they change
    localStorage.setItem('todolist', JSON.stringify(items));
  }, [items]);

  const handleClick = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    const test = items.filter((item) => item.checked == true)
    console.log(test)
    setItems(updatedList);

  };

  const handleEdit = (id, newName) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
  };

  const handleEditClick = (id) => {
    setEditItemId(id);
  };

  const handleCancelEdit = () => {
    setEditItemId(null);
  };

  const addItems = (item) => {
    const id = items.length + 1;
    const uplst = { id, name: item, checked: false };
    const updatedlst = [...items, uplst];
    setItems(updatedlst);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setnewItems('');
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItems={newItems}
        setnewItems={setnewItems}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleClick={handleClick}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        editItemId={editItemId}
        onEditClick={handleEditClick}
        onCancelEdit={handleCancelEdit}
      />
    </div>
  );
}

export default App;
