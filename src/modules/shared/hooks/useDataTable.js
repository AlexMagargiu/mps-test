import { useState, useEffect } from "react";

export const useDataTable = (Service) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await Service.getAll();
      setData(response);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (formData) => {
    try {
      setLoading(true);
      const newItem = await Service.create(formData);
      setData((prevItems) => [...prevItems, newItem]);
      setIsModalOpen(false);
    } catch (err) {
      setError(err.message);
      console.error("Error adding item:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (formData) => {
    try {
      setLoading(true);
      const updatedItem = await Service.update(selectedItem.id, formData);
      setData((prevItems) =>
        prevItems.map((item) =>
          item.id === selectedItem.id ? updatedItem : item
        )
      );
      setIsModalOpen(false);
      setSelectedItem(null);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
      console.error("Error updating item:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await Service.delete(id);
      setData((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
      console.error("Error deleting item:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRowClick = async (id) => {
    try {
      const item = await Service.getById(id);
      setSelectedItem(item);
      setIsEditing(true);
      setIsModalOpen(true);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching item details:", err);
    }
  };

  const handleAddClick = () => {
    setIsEditing(false);
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setIsEditing(false);
    setError(null);
  };

  return {
    isModalOpen,
    data,
    loading,
    error,
    selectedItem,
    isEditing,

    handleAdd,
    handleEdit,
    handleDelete,
    handleRowClick,
    handleAddClick,
    handleModalClose,
  };
};
