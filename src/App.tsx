import React, { useCallback } from 'react'
import 'src/App.css'
import LoginFormOldie from 'src/components/login-form'
import LoginForm, { LoginFormNoClass2 } from 'src/components/LoginForm'

function App() {
  const someAbstractSend = useCallback((d: FormData) => {
    // d -> Form
  }, [])

  return (
    <>
      <LoginFormOldie />
      <LoginForm />
      <LoginFormNoClass2 onSubmit={someAbstractSend} />
    </>
  )
}

export default App
