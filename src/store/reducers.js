
import { combineReducers } from 'redux'
import {
    ApiRequest,
    ApiSuccess,
    ApiError,
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

export function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            // console.log(action, 'SET_VISIBILITY_FILTER')
            return action.filter
        default:
            return state
    }
}

export function todo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

const initUser = {
    username: '',
    password: ''
}

// export function login(state = initUser, action) {
//     console.log(state, action, 'reduces login')
//     switch (action.type) {
//         case 'login':
//             return {
//                 // ...state,
//                 ...action.user
//             }
//         default: return state
//     }
// }

export function userInfo(state = {}, action) {
    console.log(state, action, 'login reducer')
    switch (action.type) {
        case ApiRequest:
            return state
        case ApiSuccess:
        case ApiError:
            return action.data
        default: return state
    }
}


const todoApp = combineReducers({
    // visibilityFilter,
    todo,
    userInfo
})

export default todoApp
