import { subscribe } from '../../../api/newsletter/newsletterApi';
import toastr from 'toastr';

class NewsletterService {
  subscribe(email) {
    const formData = new FormData()
    formData.set('email', email)

    return subscribe(formData)
      .catch(error => {
        if (error.response) {
          toastr.error(error.response.data.message)

          return
        }

        console.log(error)
    })
  }
}

export default new NewsletterService()