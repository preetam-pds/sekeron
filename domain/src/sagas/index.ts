import { takeEvery } from 'redux-saga/effects'
import  { loginRedux }  from '../redux/login-redux/LoginRedux'
import ApiServices from '../services/ApiServices'
import { LoginSaga } from './LoginSaga'

const api = ApiServices.create()

export default function* root() {
    yield takeEvery(loginRedux.actions.loginRequest, LoginSaga, api)
}
