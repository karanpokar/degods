
import {createStore} from 'redux';
import Reducer from './reducer';

const appStore = createStore(Reducer);

export default appStore;
