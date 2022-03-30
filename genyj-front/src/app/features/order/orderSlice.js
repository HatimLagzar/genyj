import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    size: null,
    slim: null,
    length: null,
    productId: null
  },
  reducers: {
    setSize(state, action) {
      state.size = action.payload
    },
    setSlim(state, action) {
      state.slim = action.payload
    },
    setLength(state, action) {
      state.length = action.payload
    },
    setProductId(state, action) {
      state.productId = action.payload
    },
  },

})

export const {setSize, setSlim, setLength, setProductId} = orderSlice.actions
export default orderSlice.reducer