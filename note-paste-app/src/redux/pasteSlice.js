import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
  pastes: (() => {
    try {
      const savedPastes = localStorage.getItem("pastes");
      return savedPastes ? JSON.parse(savedPastes) : [];
    } catch (error) {
      // If JSON.parse fails, log the error and return an empty array
      console.error("Error parsing saved pastes:", error);
      return [];
    }
  })()
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
     const paste=action.payload;
     state.pastes.push(paste);
     localStorage.setItem("pastes",JSON.stringify(state.pastes));
     toast("paste created successfully");
    },
    updateToPastes: (state,action) => {
      
    },
   resetAllPastes: (state, action) => {
      
    },
    removeFromPastes:(state,action)=>{

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes  } = pasteSlice.actions

export default pasteSlice.reducer