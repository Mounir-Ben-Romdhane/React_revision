import { createSlice } from '@reduxjs/toolkit';
import { getallComp } from '../service/api';

// Initial state
const initialState = {
  comps: [],
};

const compsSlice = createSlice({
    name: "comps",
    initialState,
    reducers: {
      populateComps(state, action) {
        state.comps = action.payload;
      },
      addCompReducer: (state, action) => {
        const payload = action.payload;
        state.comps.push(payload);
      },
      setErrors(state, action) {
        state.errors = action.payload;
      },
    },
  });
  
  export const fetchEvents = () => async(dispatch) => {
      try{
       // console.log("aefoiaeof");
          const compsResult = await getallComp();
         // console.log("compsResult",compsResult.data);
          dispatch(populateComps(compsResult.data));
          dispatch(setErrors(null));
      }catch(error){
          dispatch(setErrors(error));
      }};
      
 
  export const {populateComps,addCompReducer, setErrors}= compsSlice.actions;
  export default compsSlice.reducer;