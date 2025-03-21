import React, { useEffect, useState } from 'react';
import { getItems, createItem } from '../services/api'; // Pastikan path import benar

const ItemList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [newItem, setNewItem] = useState({
    category: '',
    stack: '',
    in: '',
    out: '',
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await getItems();
      setItems(response.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createItem(newItem);
      fetchItems();
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  return (
    <div>
      <h1>Inventory Items</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Stack"
          value={newItem.stack}
          onChange={(e) => setNewItem({ ...newItem, stack: e.target.value })}
        />
        <input
          type="date"
          placeholder="In"
          value={newItem.in}
          onChange={(e) => setNewItem({ ...newItem, in: e.target.value })}
        />
        <input
          type="date"
          placeholder="Out"
          value={newItem.out}
          onChange={(e) => setNewItem({ ...newItem, out: e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <strong>Code:</strong> {item.code} - <strong>Category:</strong> {item.category} - <strong>Stack:</strong> {item.stack} - <strong>In:</strong> {item.in} - <strong>Out:</strong> {item.out}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;