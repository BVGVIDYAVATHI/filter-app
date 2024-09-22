import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../src/store/itemSlice';
import SearchBar from './components/SearchBar';

const renderWithRedux = (component, { store = configureStore({ reducer: { items: itemsReducer } }) } = {}) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe('SearchBar Component', () => {
  it('should dispatch setSearchTerm action when input changes', () => {
    const { getByPlaceholderText } = renderWithRedux(<SearchBar />);
    fireEvent.change(getByPlaceholderText('Search items...'), { target: { value: 'Banana' } });
    expect(screen.getByPlaceholderText('Search items...')).toHaveValue('Banana');
  });
});
