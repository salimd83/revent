import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/event/eventReducers';

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducer;
