import React from 'react'
import LoginForm from 'src/components/LoginForm'
import LoginErrorBoundary from 'src/components/LoginErrorBoundary'

export default () => {
  return (
    <LoginErrorBoundary>
      <LoginForm />
    </LoginErrorBoundary>
  )
}
