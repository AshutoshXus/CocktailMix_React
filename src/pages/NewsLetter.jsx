import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)
    console.log(response)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const NewsLetter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our Newsletter
      </h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="Ashutosh"
        ></input>
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Kumar"
        ></input>
      </div>

      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        ></input>
      </div>

      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  )
}
export default NewsLetter
