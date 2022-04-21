import { ItemType } from "./../../types/item";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpenedType {
  id: number;
  name: string;
}

interface GameState {
  list: ItemType[];
  opened: OpenedType[];
  score: number;
  clickNumber: number;
  completedNumber: number;
}

const initialState: GameState = {
  list: [],
  opened: [],
  score: 0,
  clickNumber: 0,
  completedNumber: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ItemType[]>) => {
      state.list = action.payload;
    },
    changeOpen: (state, action: PayloadAction<number>) => {
      if (state.clickNumber !== 2) {
        const item: any = state.list.find((item) => item.id === action.payload);
        if (!item.completed) {
          item.open = !item.open;
          state.opened.push({ name: item.name, id: item.id });
        } else {
          return;
        }
        state.clickNumber++;
      } else {
        return;
      }
    },
    gameControl: (state) => {
      const openedLength = state.opened.length;

      if (openedLength === 2) {
        const firstItem = state.opened[0];
        const secondItem = state.opened[1];
        state.clickNumber = 0;

        if (firstItem.name === secondItem.name) {
          state.list[firstItem.id].completed = true;
          state.list[secondItem.id].completed = true;
          state.opened = [];
          state.score += 50;
          state.completedNumber += 2;
        } else {
          state.list[firstItem.id].open = false;
          state.list[secondItem.id].open = false;
          state.opened = [];
          state.score -= 10;
        }
      } else {
        return;
      }
    },
    gameReset: (state) => {
      state.list = [];
      state.opened = [];
      state.score = 0;
      state.clickNumber = 0;
      state.completedNumber = 0;
    },
  },
});

export const { changeOpen, setList, gameControl, gameReset } = gameSlice.actions;
export default gameSlice.reducer;
