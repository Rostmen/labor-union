import React, {
  ChangeEvent,
  useCallback,
  useState,
  ReactElement,
  useRef,
  SyntheticEvent,
} from 'react'
import { MinField } from 'src/components/Field'

// you should always name react components UpperCased, framework, won't work with lowercase
// you should name MyComponentFile.tsx - also uppercased, convention
const LoginFormNoClass = () => {
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')

  // you always want to "memoize" these functions with useCallback
  // if you move input into `Field` component, you can encapsulate repitative logic
  const handleSubmit = useCallback(() => console.log('submitting'), [])
  const handleInputChange = useCallback(
    changeFn => (e: ChangeEvent<HTMLInputElement>) => changeFn(e.target.value),
    [],
  )
  const setPhoneValue = handleInputChange(setPhone)
  const setPassValue = handleInputChange(setPass)

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input type="text" value={phone} onChange={setPhoneValue} />
      </label>
      <label>
        Password:
        <input type="password" value={pass} onChange={setPassValue} />
      </label>
      <input onSubmit={handleSubmit} type="submit" value="Submit" />
    </form>
  )
}

export default LoginFormNoClass

type FormProps = {
  onSubmit: (d: FormData) => void
}
export const LoginFormNoClass2 = (props: FormProps): ReactElement => {
  const formEl = useRef<HTMLFormElement>(null)
  const handleSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault()
    // do something ... but you have to parse the data etc
    // try this lib https://jaredpalmer.com/formik
  }, [])

  return (
    <form onSubmit={handleSubmit} ref={formEl}>
      <label>
        Phone:
        <MinField type="text" />
      </label>
      <label>
        Password:
        <MinField type="password" />
      </label>
      <input onSubmit={handleSubmit} type="submit" value="Submit" />
    </form>
  )
}
