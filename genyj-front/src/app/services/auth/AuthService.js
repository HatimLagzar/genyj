import { login, refresh } from '../../../api/auth/loginApi';
import jwtDecode from 'jwt-decode';
import { setToken, setUser } from '../../features/auth/authSlice';
import toastr from 'toastr';

class AuthService {
  login(email, password) {
    const formData = new FormData();
    formData.set('email', email);
    formData.set('password', password);

    return login(formData)
      .then((response) => {
        const token = response.data.token;
        const user = jwtDecode(token);

        localStorage.setItem('authToken', token);
        localStorage.setItem('authUser', JSON.stringify(user));

        toastr.success(response.data.message);

        return response;
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem('authUser'));
  }

  hasBeenAuthenticated() {
    return (
      localStorage.getItem('authToken') !== null &&
      localStorage.getItem('authUser') !== null
    );
  }

  isExpired() {
    if (this.hasBeenAuthenticated()) {
      const token = localStorage.getItem('authToken');
      const user = jwtDecode(token);

      return user.exp * 1000 < new Date().getTime();
    }

    return true;
  }

  verifyAuthentication() {
    if (this.hasBeenAuthenticated()) {
    }
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  getUser() {
    return jwtDecode(localStorage.getItem('authToken'));
  }

  refreshToken(token) {
    return refresh(token).catch((error) => {
      if (error.response) {
        toastr.error(error.response.data.message);
      } else {
        console.log(error);
      }
    });
  }

  /**
   * Save the token in localStorage and dispatch to the state
   *
   * @param {string} token
   * @param {fn} dispatch
   */
  saveToken(token, dispatch) {
    localStorage.setItem('authToken', token);

    const user = jwtDecode(token);

    dispatch(setToken(token));
    dispatch(setUser(user));
  }
}

export default new AuthService();
