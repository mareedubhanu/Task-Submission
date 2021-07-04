import { createStore } from 'redux';
import taskActions from './reducer';

const store=createStore(taskActions);
export default store;