import { createStore } from "redux";
import rootReducer from "./RootReducer";
import Cookies from "js-cookie";
import parseCookies from "../utility/parseCookies";

export const LocalStoreName = "persistState";

function saveToLocalStorage(state) {
  try {
    const serialState = JSON.stringify(state);
    Cookies.set(LocalStoreName, serialState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const Data = Cookies.get(LocalStoreName);
    if (Data === undefined || typeof window === "undefined") return undefined;
    console.log(Data);
    return JSON.parse(Data);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
