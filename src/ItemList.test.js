import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../src/store/itemSlice';
import ItemList from './components/ItemList';
import { setSearchTerm } from '../src/store/itemSlice';

const renderWithRedux = (component, { initialState, store = configureStore({ reducer: { items: itemsReducer }, preloadedState: initialState }) } = {}) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('ItemList Component', () => {
  const initialState = {
    items: {
      items: ['Apple', 
  'Banana', 
  'Grapes', 
  'Orange', 
  'Pineapple', 
  'Strawberry', 
  'Blueberry', 
  'Mango', 
  'Watermelon', 
  'Kiwi', 
  'Peach', 
  'Cherry', 
  'Papaya', 
  'Pear', 
  'Lemon', 
  'Coconut', 
  'Dragon Fruit', 
  'Raspberry', 
  'Blackberry', 
  'Guava'],
      searchTerm: '',
    },
  };

  it('should render all items', () => {
    renderWithRedux(<ItemList />, { initialState });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('should filter items based on searchTerm', () => {
    const store = configureStore({ reducer: { items: itemsReducer }, preloadedState: initialState });

    store.dispatch(setSearchTerm('Banana'));

    renderWithRedux(<ItemList />, { store });

    expect(screen.queryByText('Apple')).toBeNull();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });
});
