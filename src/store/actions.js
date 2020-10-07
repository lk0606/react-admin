import { getUserInfo } from '../api/user'
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const ApiRequest = 'ApiRequest'
export const ApiSuccess = 'ApiSuccess'
export const ApiError = 'ApiError'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
 * action 创建函数
 */

export function loginAction(params) {
    return (dispatch) => {
        dispatch(apiRequest())
        return getUserInfo(params)
            .then((res) => {
                return dispatch(apiSuccess(res.user))
            })
            .catch((err) => {
                dispatch(apiError(err))
            })
    }
}

export function sagaRequest(data) {
    return {
        type: 'sagaRequest',
        data,
    }
}
export function apiRequest() {
    return {
        type: ApiRequest,
    }
}
export function apiSuccess(data) {
    return {
        type: ApiSuccess,
        data,
    }
}
export function apiError(data) {
    return {
        type: ApiError,
        data,
    }
}

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
