import { registerUser, loginUser, setAuthToken } from '../utils/api';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';

export const register = (formData) => async (dispatch) => {
  try {
    const { data } = await registerUser(formData);
     dispatch({ type: REGISTER_SUCCESS, payload: { token: data.token, username: data.username } });
    localStorage.setItem('token', data.token);
    setAuthToken(data.token); 
    return true; 
  } catch (error) {
    dispatch({ type: AUTH_FAIL, payload: error.response.data.message });
    return false; 
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const { data } = await loginUser(formData);
     dispatch({ type: LOGIN_SUCCESS, payload: { token: data.token, username: data.username } });
    localStorage.setItem('token', data.token);
    setAuthToken(data.token); 
    return true; 
  } catch (error) {
    dispatch({ type: AUTH_FAIL, payload: error.response.data.message });
    return false; 
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthToken(null); 
  dispatch({ type: AUTH_FAIL, payload: null }); 
};
