import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeReducer from "../pages/home/reducer";
import tableReduce from "../pages/pageTable/reduce";

const createRootReducer = (history: any) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    homeData: homeReducer,
    tableData: tableReduce
  });
  const rootReducer = (state: any, action: any) => {
    // 重置redux
    if (action.type === 'RESET_REDUX') {
      state = undefined;
    }
    return appReducer(state, action);
  };
  return rootReducer;
}


export default createRootReducer;