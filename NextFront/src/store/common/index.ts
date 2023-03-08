import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CommonState {
  sample: number;
}

const initialState: CommonState = {
  sample: 0,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.sample += action.payload;
    },
  },
});

export const { setValue } = commonSlice.actions;

export const sampleSelector = (state: RootState) => state.common.sample;

export default commonSlice.reducer;
