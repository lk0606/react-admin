
import { createStore, applyMiddleware, compose } from 'redux'
import middlewareThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import todoApp from './reducers'
import reduxLogger from 'redux-logger'
import rootSaga, { helloSaga, testLogin } from './sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    todoApp,
    {},
    composeEnhancers(
        applyMiddleware(
            middlewareThunk,
            sagaMiddleware,
            // reduxLogger
        )
    )

)
// 打印初始状态
// console.log(store.getState(), 'init state')
const user = {
    username: 'admin',
    password: '123'
}

// sagaMiddle(testLogin(user).next())
sagaMiddleware.run(rootSaga)
// const t = testLogin(user)
// sagaMiddleware.run(t)

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// const unsubscribe = store.subscribe(() => console.log( store.getState(), 'store.subscribe' ))

// 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
// unsubscribe()

export default store
