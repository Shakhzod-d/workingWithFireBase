import { createStore } from "redux";
import timeReducer from "./timeReducer";

export const store = createStore(timeReducer);
