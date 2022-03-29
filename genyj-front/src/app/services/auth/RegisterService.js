import { register } from '../../../api/auth/registerApi';
import toastr from 'toastr';

class RegisterService {
  register(name, email, password, passwordConfirmation) {
    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('password', password);
    formData.set('password_confirmation', passwordConfirmation);

    return register(formData).catch((error) => {
      if (error.response) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.message);

          return error;
        }
      }

      console.error(error);

      return error;
    });
  }
}

export default new RegisterService();
