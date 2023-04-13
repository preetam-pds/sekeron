import { SagaIterator } from "@redux-saga/types";
import { call, put } from "redux-saga/effects";
import { loginRedux } from "../redux/login-redux/LoginRedux";
// import LoginActions from '../../redux/registration/LoginRedux'

export function* LoginSaga(api: any, action: any): SagaIterator {
  try {
    const response = yield call(api.login, action.payload);
    if (response.data.code === 200) {
      yield put(loginRedux.actions.loginSuccess(response.data));
    } else {
      yield put(loginRedux.actions.loginFailure(response.data));
    }
  } catch (error: any) {
    yield put(loginRedux.actions.loginFailure(error));
  }
}
