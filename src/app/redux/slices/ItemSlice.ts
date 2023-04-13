import { createSlice, nanoid } from "@reduxjs/toolkit";
import { items } from "../constants";
import { IItemState, IState } from "../interface";

const name = "items";

const initialState: IItemState = {
  list: items,
};

const itemsSlice = createSlice({
    initialState,
    name,
    reducers: {
    
    },
    
  });
  
  export const selectItems = (state: IState) => state.items.list;
  
  export default itemsSlice.reducer;
  