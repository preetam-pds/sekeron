import { dashboardRedux } from './dashboard-redux/DashboardRedux'
import { CreatePostRedux } from './create-post-redux/CreatePostRedux'
import { CreateProjectRedux } from './create-project-redux/CreateProjectRedux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { loginRedux } from './login-redux/LoginRedux'
import { HomeRedux } from './home-redux/HomeRedux'
import rootSaga from '../sagas'
import { ProfileRedux } from './profile-redux/ProfileRedux'
import { ExploreRedux } from './explore-redux/ExploreRedux'
import { searchRedux } from './search-redux/SearchRedux'
import { blogsRedux } from './blogs-redux/BlogsRedux'

export default () => {
  const middlewares: any = []

  const middleware = createSagaMiddleware()
  middlewares.push(middleware)

  const sagaMiddleWare = () => middlewares

  // use lower camelcase for all the reducer for example = blogsRedux: blogsRedux.reducer,

  const store = configureStore({
    reducer: {
      Login: loginRedux.reducer,
      CreatePostRedux: CreatePostRedux.reducer,
      ProfileRedux: ProfileRedux.reducer,
      CreateProjectRedux: CreateProjectRedux.reducer,
      HomeRedux: HomeRedux.reducer,
      ExploreRedux: ExploreRedux.reducer,
      dashboardRedux: dashboardRedux.reducer,
      searchRedux: searchRedux.reducer,
      blogsRedux: blogsRedux.reducer,
    },
    middleware: sagaMiddleWare,
  })

  middleware.run(rootSaga)

  return {
    store,
    sagaMiddleWare,
  }
}
