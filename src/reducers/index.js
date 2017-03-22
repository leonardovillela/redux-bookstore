import { combineReducers } from 'redux';

import BookReducer from './book_reducers';

const rootReducer = combineReducers({
  books: BookReducer
});

export default rootReducer;
