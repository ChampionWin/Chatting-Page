import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.autor = params.username;
    params.socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
