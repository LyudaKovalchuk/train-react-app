import {combineReducers} from "redux";
import  itemReducer  from './itemReduce';

const itemReducer = require('./itemReducer').default;
import { initialReducer } from './initialReducer'

const initialReducer = require('./itemReducer').initialReducer;

const rootReducer = combineReducers({
  initialReducer,
  itemReducer
});
export default rootReducer;
