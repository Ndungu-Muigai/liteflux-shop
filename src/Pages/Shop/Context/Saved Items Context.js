import React, { createContext, useState, useEffect, useContext } from 'react';

const SavedItemsContext = createContext();

const saveItemsToLocalStorage = (items) => {
  localStorage.setItem('savedItems', JSON.stringify(items));
};

const loadItemsFromLocalStorage = () => {
  const savedItems = localStorage.getItem('savedItems');
  return savedItems ? JSON.parse(savedItems) : [];
};

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState(loadItemsFromLocalStorage);

  useEffect(() => {
    saveItemsToLocalStorage(savedItems);
  }, [savedItems]);

  const addItemToSaved = (item) => {
    setSavedItems((prevItems) => {
      const existingItem = prevItems.find((savedItem) => savedItem.id === item.id);
      if (existingItem) {
        return prevItems; // Item already saved
      }
      return [...prevItems, item];
    });
  };

  const removeItemFromSaved = (itemId) => {
    setSavedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <SavedItemsContext.Provider value={{ savedItems, addItemToSaved, removeItemFromSaved }}>
      {children}
    </SavedItemsContext.Provider>
  );
};

export const useSavedItems = () => useContext(SavedItemsContext);
