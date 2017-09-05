import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import ActiveUser from './active-user'

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUser
});

export default allReducers;