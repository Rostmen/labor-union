import React from 'react'
import * as yup from 'yup'
import { withFormik, FormikProps, Form, Field } from 'formik'

// Shape of form values
interface FormValues {
  phone: string
  password: string
}

interface OtherProps {
  message?: string
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="phone" name="phone" />
      {touched.phone && errors.phone && <div>{errors.phone}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      {isSubmitting ? <div>Submitting loader</div> : null}
    </Form>
  )
}

// The type of props MyForm receives
interface MyFormProps {
  initialPhone?: string
  message?: string // if this passed all the way through you might do this or make a union type
}

const phoneNumberRegExp = RegExp('((\\+)?\\b(38)?(0[\\d]{2}))([\\d-]{5,8})([\\d]{2})')
const MyForm = withFormik<MyFormProps, FormValues>({
  validationSchema: yup.object().shape({
    phone: yup.string().matches(phoneNumberRegExp, 'Incorrect phone number').required(),
    password: yup.string().required(),
  }),
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      phone: props.initialPhone || '',
      password: '',
    }
  },

  handleSubmit: values => {
    // let's imagine we send values somewhere
    return fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => console.log(data))
  },
})(InnerForm)

export default MyForm
