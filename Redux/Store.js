import { createStore } from "redux";
import rootReducer from "./RootReducer";
import Cookies from "js-cookie";
import { parseCookies } from "../utility/parseCookies";

export const LocalStoreName = "persistState";

function saveToLocalStorage(state) {
  try {
    const serialState = JSON.stringify(state);
    console.log(state), serialState;

    Cookies.set(LocalStoreName, serialState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialState = parseCookies();
    if (serialState === null) return undefined;
    console.log(serialState.persistState);
    return JSON.parse(serialState.persistState);
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
