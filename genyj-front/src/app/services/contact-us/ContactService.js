import { contactUs } from '../../../api/contact-us/contactApi';
import toastr from 'toastr';

class ContactService {
  contactUs(name, email, subject, message) {
    const formData = new FormData();
    formData.set('name', name)
    formData.set('email', email)
    formData.set('subject', subject)
    formData.set('message', message)

    return contactUs(formData)
      .catch(error => {
        if (error.response) {
          toastr.error(error.response.data.message)

          return
        }

        console.log(error)
      })
  }
}

export default new ContactService();