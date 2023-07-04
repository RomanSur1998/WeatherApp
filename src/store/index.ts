import { createStore, combineReducers, applyMiddleware } from "redux";
import { WeatherReducer } from "./WeatherReducer";
import { LoactionReducer } from "./LoactionReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  weather: WeatherReducer,
  location: LoactionReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
