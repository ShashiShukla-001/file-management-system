import * as types from "../actionTypes/authActionTypes"

const loginUser = (email,password) => {
    return {
        type: types.LOGIN_USER ,
        email,
        password
    };
}