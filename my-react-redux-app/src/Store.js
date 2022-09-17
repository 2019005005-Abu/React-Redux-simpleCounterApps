import {createStore} from 'redux';
import { COUNTER_REDUCER } from './Com/Services/Reducers_Folder/Actioon_Folder/COUNTER_REDUCER';
const store=createStore(COUNTER_REDUCER);
export default store;
