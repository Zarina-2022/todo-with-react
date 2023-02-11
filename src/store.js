import { createStore, combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import TodoReducer from './reducer/TodoReducers';

const reducer = combineReducers({
    // this contains all reducers
    Todo: TodoReducer,
});

const initialState = {};

const middelware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store;