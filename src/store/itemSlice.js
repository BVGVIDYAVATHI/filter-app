import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Grapes' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Pineapple' },
    { id: 6, name: 'Strawberry' },
    { id: 7, name: 'Blueberry' },
    { id: 8, name: 'Mango' },
    { id: 9, name: 'Watermelon' },
    { id: 10, name: 'Kiwi' },
    { id: 11, name: 'Peach' },
    { id: 12, name: 'Cherry' },
    { id: 13, name: 'Papaya' },
    { id: 14, name: 'Pear' },
    { id: 15, name: 'Lemon' },
    { id: 16, name: 'Coconut' },
    { id: 17, name: 'Dragon Fruit' },
    { id: 18, name: 'Raspberry' },
    { id: 19, name: 'Blackberry' },
    { id: 20, name: 'Guava' },
  

],
  searchTerm: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;
