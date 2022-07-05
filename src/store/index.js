import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Reducers from "./reducers";
// const middleware = [thunk];
const RootReducers = combineReducers({
    Reducers,
});

 const store = createStore(RootReducers, applyMiddleware(thunk));
 export default store
